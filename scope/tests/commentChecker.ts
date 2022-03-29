import ts from "typescript"
import AstCache from "../ast"
import Scope, { ScopeType } from "../scope"

export interface Comment {
  comment: string
  pos: number
  end: number
}

/** 依据注释对代码进行检查，用于静态分析的单元测试，方便通过注释的形式，对代码在分析中的状态做出描述 */
abstract class CommentCheck {
  private code: string
  private sourceFile: ts.SourceFile
  abstract checker(comment: Comment): void
  constructor(code: string) {
    this.code = code
    this.sourceFile = ts.createSourceFile('test.ts', this.code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  }
  /** 检查所有注释 */
  checkAllComment() {
    const comments = this.code.matchAll(/\/\/(.*?)\n/g)
    if (comments) {
      for (let comment of comments) {
        this.checker({
          comment: comment[1].replace(/^\/[\/\*] +/, '').replace(/( )+(\*\/)?$/, ''),
          pos: comment.index,
          end: comment.index + comment[0].length,
        })
      }
    }
  }
}

export interface ICommentDesp {
  /** 查找的变量名 */
  target: string
  /** 变量是否定义在全局 */
  global?: boolean
  /** 变量定义的位置 */
  pos?: number
  /** 变量是否未定义 */
  notDefined?: boolean
  /** 变量是否存在声明前置 */
  hoisting?: boolean
}

/** 
 * 依据注释对代码进行检查，用于静态分析的单元测试，方便通过注释的形式，对代码在分析中的状态做出描述
 * 用于作用域相关检查，检查注释处对应变量的各种属性
 */
export class ScopeCommentChecker extends CommentCheck {
  private scope: Scope
  private globalScope: Scope
  constructor(code: string) {
    super(code)
    this.globalScope = new Scope({type: ScopeType.GLOBAL})
    const cache = new AstCache('variableDeclaration.ts', code, this.globalScope)
    this.scope = cache.generateScope()
  }
  checker(comment: Comment) {
    const target = this.scope.innermost(comment.pos)
    const result = JSON.parse(comment.comment)
    const res = target?.lookupParent(result.target)
    if (res) {
      if (typeof result.pos === 'number') {
        expect(res.pos).toBe(result.pos)
      } else if (res.scope === this.globalScope){
        expect(result.global).toBeTruthy()
      } else {
        expect(result.hoisting).toBeTruthy()
      }
    } else {
      expect(result.notDefined).toBeTruthy()
    }
  }
  
}