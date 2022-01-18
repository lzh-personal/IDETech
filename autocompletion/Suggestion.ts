import { ParseTree } from "antlr4ts/tree/ParseTree"
import { FormulaLexer } from './FormulaLexer'
import { ConstantAtomContext, ExpressionContext, FunctionContext, NumberAtomContext, ParamContext, StringContext, VariableAtomContext } from './FormulaParser'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { FormulaContextVisitor } from "./FormulaContextVisitor"
import { ParserRuleContext } from "antlr4ts"
import { ErrorNode } from "antlr4ts/tree/ErrorNode"

/** 公式支持的类型 */
export enum VariableType {
  NUMBER,
  STRING,
  VOID
}

/** 函数参数，string[] 代表枚举类型的参数 */
export type FunctionParamType = VariableType.NUMBER | VariableType.STRING | string[]

export interface IFunctionType {
  name: string
  params: FunctionParamType[]
  return: VariableType
}

export class Suggestion {
  private tree: ParseTree
  private variables: string[] = []
  private funcs: IFunctionType[] = []

  constructor(tree: ParseTree) {
    this.tree = tree
  }

  suggestion(index: number) {
    const countFunctionsVisitor = new FormulaContextVisitor()
    const result = countFunctionsVisitor.findContext(index, this.tree).reverse()
    console.log('tree', result.map(item => item.text))

    if (result[0] instanceof VariableAtomContext) {
      // 当前光标在变量上
      if (!result[1] || result[1] instanceof ExpressionContext) {
        // 是 expression 上下文或者就没有上下文了，直接按 expression 给出提示
        return this.expressSuggestion(result[0].text)
      }
      if (result[1] instanceof ParamContext && result[2] instanceof FunctionContext) {
        // 是函数上下文
        return this.functionSuggestion(result[2], result[0])
      }
    } else if (result[0] instanceof StringContext) {
      // 字符串只有作为函数的参数时才尝试做提示
      if (result[1] instanceof ParamContext && result[2] instanceof FunctionContext) {
        // 是函数上下文
        return this.functionSuggestion(result[2], result[0])
      }
    } else if (result[0] instanceof FunctionContext) {
      // 「fun(」的输入在 ANTLR 中会处理成两个连续的错误节点，此时我们只会搜索到一个没有下文的 function context
      return this.functionSuggestion(result[0])
    } else if (result[0] instanceof TerminalNode) {
      if (result[1] && result[1] instanceof FunctionContext) {
        // 函数上下文中，返回了一个终结符
        const nextNode = this.findSibling(result[1], result[0])
        if (result[0].text === '(') {
          // 光标位于「func()」或者「func(」的 ( 后，此时提示函数的第一个参数
          return this.functionSuggestion(result[1])
        }
        if (result[0].symbol.stopIndex < index && nextNode instanceof ParamContext) {
          return this.functionSuggestion(result[1], nextNode)
        }
        
      } else if (result[1] && result[1] instanceof ExpressionContext) {
        // 表达式上下文中，返回了一个终结符
        if(result[0].symbol.stopIndex < index && this.isErrorNode(this.findSibling(result[1], result[0]))) {
          // 终结符后紧跟一个错误节点，按表达式的模式提示
          return this.expressSuggestion()
        }
      }
    }
    return []
  }

  functionSuggestion(func: FunctionContext, target?: ParseTree) {
    // 函数上下文，需要根据函数名以及参数的位置确定需要补全的内容
    // 函数的语法规则为： function: VARIABLE (param, params... ),通过下述方法获取函数名
    const funcName = func.getToken(FormulaLexer.VARIABLE, 0).text
    console.log('funcName', funcName)
    const funcType = this.funcs.find(item => item.name === funcName)
    const funcParms = func.getRuleContexts(ParamContext)
    console.log('funcType', funcType)
    if (target) {
      let i = 0
      for (; i < funcParms.length; i++) {
        if (
          funcParms[i].sourceInterval.a === target.sourceInterval.a
          && funcParms[i].sourceInterval.b === target.sourceInterval.b
        ) {
          break
        }
      }
      return this.paramsSuggestion(funcType.params[i], target.text)
    }
    // 没有 target 时，当前处于「func(」或者「func()」的情况，此时实际需要补全的是函数的第一个参数
    return this.paramsSuggestion(funcType.params[0])
  }

  paramsSuggestion(param: FunctionParamType, input?: string,) {
    if (param instanceof Array) {
      // 去掉 string token 收尾的引号然后再做匹配
      return param.filter(item => input ? item.startsWith(input.replace(/^['"]/, '').replace(/['"]$/, '')) : true)
    }
    if (param === VariableType.NUMBER) {
      return this.expressSuggestion().filter(item => input ? item.startsWith(input.replace(/^['"]/, '').replace(/['"]$/, '')) : true)
    }
    return []
  }

  /** 表达式的提示，包含所有变量以及返回值是 number 的函数 */
  expressSuggestion(input?: string) {
    console.log(input)
    return [
      // 所有变量的提示
      ...this.variables,
      // 所有返回值为 number 的函数名提示
      ...this.funcs.filter(item => item.return === VariableType.NUMBER).map(item => item.name)
    // 按照当前已经输入的值进行过滤
    ].filter(item => input ? item.startsWith(input.replace(/^['"]/, '').replace(/['"]$/, '')) : true)
  }

  /** 设置可选用变量 */
  setvariable(vars: string[]) {
    this.variables = vars
  }
  /** 设置可选用函数 */
  setFuncs(funcs: IFunctionType[]) {
    this.funcs = funcs
  }

  /** 是否是终结符节点，我们的语法树不完全和 parse tree 相同，在遍历语法树时直接返回节点的都是我们的终结符 */
  isTernimal(node: ParseTree) {
    return [
      TerminalNode,
      StringContext,
      NumberAtomContext,
      ConstantAtomContext,
      VariableAtomContext
    ].some(Fn => node instanceof Fn)
  }
  /** 是否是但词法符号删除或者补全出现的错误节点 */
  isErrorNode(node: ParseTree) {
    return (node instanceof ParserRuleContext && !!node.exception) || node instanceof ErrorNode
  }

  findSibling(parent: ParserRuleContext, node: ParseTree) {
    let i = 0
    for (; i < parent.childCount; i++) {
      if (node === parent.getChild(i)) {
        break
      }
    }
    return parent.getChild(Math.min(parent.childCount - 1, i + 1))
  }
}
