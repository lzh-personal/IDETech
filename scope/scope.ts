import { NodeFlags } from "typescript"

export enum VariableKind {
  Var,
  Let,
  Const,
}

export interface Variable {
  kind: VariableKind
  name: string
  pos: number
  /** 是否是全局变量，js 中未声明直接赋值的变量会声明到全局作用域中，但 js 存在声明后置的情况，
   *  记录此变量是声明到全局的，如果后续分析遇到了此变量声明，则将其声明到 lcoal，
   *  否则，在回溯时将其声明到 global
  */
  global?: boolean
  scope: Scope
}

export enum ScopeType {
  GLOBAL = 'global',
  BLOCK = 'block',
  FUNC = 'func',
  PKG = 'pkg',
}

export default class Scope {
  /** 开始位置 */
  start?: number
  /** 结束位置 */
  end?: number
  parent?: Scope
  children: Scope[] = []
  variables: {
    [key: string]: Variable
  } = {}
  type: ScopeType
  constructor(options: {start?: number, end?: number, parent?: Scope, type?: ScopeType}) {
    this.start = options.start
    this.end = options.end
    this.parent = options.parent
    this.type = options.type || ScopeType.FUNC
  }
  forEachVar(cb: (item: Variable) => void) {
    Object.values(this.variables).forEach(cb)
  }
  getVar(name: string) {
    return this.variables[name]
  }
  /**
   * 在 pos 位置的沿作用域链向上查找 name，找到的第一个便是当前位置可访问的 name，如果不能找到，返回 null
   * @param name 查找的变量名
   * @param pos 位置
  */
  lookupParent(name: string): Variable | null {
    const target = this.getVar(name)
    if (target) return target
    return this.parent ? this.parent.lookupParent(name) : null
  }
  /**
   * 向上查找指定类型的 scope，返回第一个查找到的值，如果未能找到，返回 global scope
   * @param types 要查找的 scope 的类型
   */
  findFirstParent(types: ScopeType[]) {
    let target: Scope = this
    while (types.indexOf(target.type) < 0 && target.parent) { target = target.parent }
    return target
  }
  /**
   * 返回指定位置处最里层作用域
   * @param pos 位置
   */
  innermost(pos: number): Scope | null {
    if (this.type === ScopeType.GLOBAL) {
      for(let child of this.children) {
        if (child.containes(pos)) {
          return child.innermost(pos)
        }
      }
    }
    if (this.containes(pos)) {
      for(let child of this.children) {
        if (child.containes(pos)) {
          return child.innermost(pos)
        }
      }
      return this
    }
    return null
  }
  /** 插入一个变量
   * @param name   变量名
   * @param kind   变量类型，主要是区分 let, const, var 等
   * @param pos    定义位置
   * @param global 是否需要声明为全局，用于未声明直接赋值的变量，其他情况不用设置
  */
  insert(name: string, kind: VariableKind, pos: number, global?: boolean) {
    this.variables[name] = {
      name,
      kind,
      pos,
      global,
      scope: this,
    }
  }
  /** 删除某个变量 */
  delete(name: string) {
    delete this.variables[name]
  }
  /** 作用域是否包含 pos 位置 */
  containes(pos: number) {
    return this.start <= pos && pos < this.end
  }
}