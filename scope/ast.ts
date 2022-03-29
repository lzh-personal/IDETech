
import * as ts from 'typescript'
import Scope, {ScopeType, VariableKind} from './scope'

function getAst(uri: string, code: string) {
  const sc = ts.createSourceFile(uri, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  return sc
}

/** 计算并获取 AST, SCOPE  */
export default class AstCache {
  private ast: ts.SourceFile
  private scope: Scope
  /**
   * 
   * @param uri 文件路径
   * @param code 代码
   * @param globalScope 全局作用域
   */
  constructor(uri: string, code: string, globalScope: Scope) {
    this.ast = getAst(uri, code)
    this.scope = new Scope({start: this.ast.pos, end: this.ast.end, parent: globalScope, type: ScopeType.PKG})
    globalScope.children.push(this.scope)
  }
  /** 遍历所有语法树节点，并构造作用域表 */
  private traverseAst(node: ts.Node, parent: Scope) {
    // 递归阶段
    let currentScope = parent
    let nextNode = node as ts.Node | undefined
    switch(node.kind) {
      // 函数申明，Generator, Async function 在 ts parser 的 ast 中，均规约为 Function
      case ts.SyntaxKind.FunctionDeclaration:
      case ts.SyntaxKind.ArrowFunction:
      case ts.SyntaxKind.FunctionExpression:
        // 优先处理处理函数名
        const funcName = (node as ts.FunctionDeclaration).name
        // CASE: const y = function test() {} 语句不会声明 test 变量
        if (
          funcName
          && node.parent.kind !== ts.SyntaxKind.VariableDeclaration
          && node.parent.kind !== ts.SyntaxKind.PropertyDeclaration
        ) {
          this.bindingVariable(funcName, VariableKind.Var, currentScope)
        }
      // 方法声明，所有处理与函数声明相同，但是方法名并不在当前作用域声明变量
      case ts.SyntaxKind.MethodDeclaration:
      case ts.SyntaxKind.GetAccessor:
      case ts.SyntaxKind.SetAccessor:
      case ts.SyntaxKind.Constructor:
        // 创建函数级作用域
        const scope = new Scope({start: node.pos, end: node.end, parent: currentScope})
        currentScope.children.push(scope)
        currentScope = scope
        // 处理参数
        ;(node as ts.FunctionLikeDeclaration).parameters.forEach(param => {
          this.bindingVariable(param.name, VariableKind.Var, currentScope)
        })
        // 函数已经创建的新的作用域，函数文法中的的 Block 不应该继续创建新的作用域了，
        // 而且函数文法中需要处理的已经完成处理，直接从 Body 开始向下递归
        // Body 不存在时（只有声明没有实现的函数），不用继续往下递归
          nextNode = (node as ts.FunctionLikeDeclaration).body
        break
      // 类声明
      case ts.SyntaxKind.ClassDeclaration:
        const className = (node as ts.ClassDeclaration).name
        if (className) {
          this.bindingVariable(className, VariableKind.Var, currentScope)
        }
        
        break
      // 变量声明
      case ts.SyntaxKind.VariableDeclarationList:
        for (let i = 0; i < (node as ts.VariableDeclarationList).declarations.length; i++) {
          const declaration = node.getFirstToken()
          const name = (node as ts.VariableDeclarationList).declarations[i].name
          switch (declaration?.kind) {
            case ts.SyntaxKind.LetKeyword:
              this.bindingVariable(name, VariableKind.Let, currentScope)
              break
            case ts.SyntaxKind.ConstKeyword:
              this.bindingVariable(name, VariableKind.Const, currentScope)
              break
            default:
              // var 声明的变量只存在于函数作用域或者 global 中
              // 向上查找最接近的函数作用域直至 global，并将变量声明至该作用域中
              const target = currentScope.findFirstParent([ScopeType.FUNC, ScopeType.PKG])
              if (!target.getVar(name.getText())) {
                this.bindingVariable(name, VariableKind.Var, target)
              }
              break
          }
        }        
        break
      // 二元表达式
      case ts.SyntaxKind.BinaryExpression:
        if ((node as ts.BinaryExpression).operatorToken.kind === ts.SyntaxKind.EqualsToken) {
          // 赋值语句，js 中，为未声明的变量赋值，会自动声明全局变量
          switch ((node as ts.BinaryExpression).left.kind) {
            case ts.SyntaxKind.Identifier:
              // 一般赋值模式：i = 1
              const name = (node as ts.BinaryExpression).left.getText()
              if (!currentScope.getVar(name)) {
                // 未声明的变量，在当前 local 中声明标志为 global 的变量
                currentScope.insert(name, VariableKind.Var, (node as ts.BinaryExpression).left.pos, true)
              }
              break
            case ts.SyntaxKind.ArrayLiteralExpression:
              // 数组赋值模式: [x, y] = [1, 2]
              ((node as ts.BinaryExpression).left as ts.ArrayLiteralExpression).elements.forEach(identifier => {
                currentScope.insert(identifier.getText(), VariableKind.Var, identifier.pos, true)
              })
              break
            case ts.SyntaxKind.ObjectLiteralExpression:
              // 对象赋值模式：({x, y} = {x: 1, y: 1})
              // PS：此模式下，括号不能少，否则会识别为两个关闭的 Block
              ((node as ts.BinaryExpression).left as ts.ObjectLiteralExpression).properties.forEach(pro => {
                pro.name && currentScope.insert(pro.name.getText(), VariableKind.Var, pro.pos, true)
              })
              break
          }
        }
        break
      // 块语句
      case ts.SyntaxKind.Block:
        const blockScope = new Scope({start: node.pos, end: node.end, parent: currentScope, type: ScopeType.BLOCK})
        currentScope.children.push(blockScope)
        currentScope = blockScope
        break
      default:
        break
    }
    if (nextNode) {
      ts.forEachChild(nextNode, node => this.traverseAst(node, currentScope))
      // 回溯阶段
      // 清理 local 中标志为 golbal 的变量
      currentScope.forEachVar((variable) => {
        if (variable.global) {
          // 回溯时，如果还存在标记为 global 的变量，则证明没有同名的 local 变量声明
          // 在当前作用域中删除，并将其添加到全局作用域中
          const globalScope = this.getGlobalScope()
          if (globalScope) {
            delete currentScope.variables[variable.name]
            globalScope.insert(variable.name, VariableKind.Var, variable.pos)
          }else {
            throw 'global scope not initialized!'
          }
        }
      })
      // 清理没有变量声明的块级作用域
      if (Object.keys(currentScope.variables).length < 1 && currentScope.parent) {
        currentScope.children.forEach(child => child.parent = currentScope.parent)
        currentScope.parent.children = currentScope.parent.children.concat(currentScope.children)
      } 
    }
  }
  /** 从变量声明语法中提取变量并插入到当前作用域中，变量声明的模式包括
   *  1. common declaration  -> x, y; x = 1, y = 1;
   *  2. object binding      -> {x, y} = {x : 1, y: 2}
   *  3. array binding       -> [key, value] = ['key', 'value']
   *  @param node  声明语句 AST 节点
   *  @param flag  声明变量的类型，真实的 flag 不一定存在于 VariableDeclaration 声明中，可能是其父节点，需要传进来
   *  @param scope 当前作用域
   */
  private bindingVariable(name: ts.BindingName, flag: VariableKind, scope: Scope) {
    switch(name.kind) {
      case ts.SyntaxKind.Identifier:
        const text = name.getText()
        if (scope.getVar(text) && scope.getVar(text).global) {
          // 存在标志位 global 的变量，并且变量声明后置，删除原始标志位 global 的变量，并重新声明
          // 因为这种情况下，先分析的赋值语句不应该包含变量声明的能力，而只是运行时赋值
          scope.delete(text)
        }
        // 声明当前变量，重复声明后面的覆盖前面的
        if (flag === VariableKind.Const || flag === VariableKind.Let) {
          scope.insert(text, flag, name.pos)
        } else {
          const target = this.getFirstNoneBlockScope(scope)
          target.insert(text, flag, name.pos)
        }
        
        break;
      case ts.SyntaxKind.ObjectBindingPattern:
      case ts.SyntaxKind.ArrayBindingPattern:
        (name as ts.BindingPattern).elements.forEach(bindingEle => {
          if (flag === VariableKind.Const || flag === VariableKind.Let) {
            scope.insert(bindingEle.name.getText(), flag, bindingEle.name.pos)
          } else {
            const target = this.getFirstNoneBlockScope(scope)
            target.insert(bindingEle.name.getText(), flag, bindingEle.name.pos)
          }
        })
        break
      default:
        break
    }
  }
  /** 获取全局作用域 */
  private getGlobalScope() {
    let current = this.scope
    while(current.parent) { current = current.parent }
    return current
  }
  /** 获取第一个非 block 的祖先节点 */
  private getFirstNoneBlockScope(scope: Scope) {
    let currentScope = scope
    while(currentScope.type === ScopeType.BLOCK && currentScope.parent) {
      currentScope = currentScope.parent
    }
    return currentScope
  }
  generateScope() {
    this.traverseAst(this.ast, this.scope)
    return this.scope
  }
  getAst() {
    return this.ast
  }
}