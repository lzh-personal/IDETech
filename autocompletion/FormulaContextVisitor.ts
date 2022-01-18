import { ConstantAtomContext, ConstantContext, ExpressionContext, FunctionAtomContext, FunctionContext, NumberAtomContext, ParamContext, StartContext, StringContext, VariableAtomContext } from './FormulaParser'
import { FormulaVisitor } from './FormulaVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'

export class FormulaContextVisitor extends AbstractParseTreeVisitor<ParseTree[]> implements FormulaVisitor<ParseTree[]> {
  private target: number
  findContext(index: number, tree: ParseTree) {
    this.target = index
    return this.visit(tree)
  }
  
  defaultResult() {
    return []
  }

  visitStart(context: StartContext) {
    return this.visit(context.expression())
  }

  visitErrorNode(node: ErrorNode): ParseTree[] {
      return [node]
  }

  visitExpression(context: ExpressionContext) {
    // expression <- atom <- terminal 这样的 parse tree 节点比较冗余，在语法树中这种情况只保留 xxx 节点即可
    // 其中 atom 我们没有记录，expression 在只有一个词法符号时直接遍历其子节点，不额外创建 expression 节点
    if (context.sourceInterval.length === 1) {
      return this.visitChildren(context)
    }
    return this.visitContext(context)
  }
  
  visitConstant(context: ConstantContext) {
    return this.visitContext(context)
  }

  visitFunction(context: FunctionContext) {
    return this.visitContext(context)
  }

  visitString(context: StringContext) {
    return [context]
  }

  visitTerminal(node: TerminalNode) {
    return [node]
  }

  visitParam(context: ParamContext) {
    return this.visitContext(context)
  }

  visitNumberAtom(context: NumberAtomContext) {
    return [context]
  }

  visitVariableAtom(context: VariableAtomContext) {
    return [context]
  }

  visitFunctionAtom(context: FunctionAtomContext) {
    return this.visit(context.function())
  }

  visitConstantAtom(context: ConstantAtomContext) {
    return [context]
  }

  getParseTreeIndex(node: ParseTree) {
    let start, end
    // the children of a ParserRuleContext are instances of either ParserRuleContext or TerminalNode      
    if (node instanceof ParserRuleContext) {
      start = node.start.startIndex
      end = node.stop.stopIndex
    }
    if (node instanceof TerminalNode ) {
      start = node.symbol.startIndex
      end = node.symbol.stopIndex
    }
    return [ start, end ]
  }

  private isErrorNode(node: ParseTree) {
    return node instanceof ErrorNode ||  (node instanceof ParserRuleContext && node.exception)
  }

  /** 向下搜索光标位置所对应的节点 */
  private visitContext(context: ParserRuleContext): ParseTree[] {
    let lastNode: ParseTree | null = null
    for (let i = 0; i < context.childCount; i++) {
      const child = context.getChild(i)
      const [ start, end ] = this.getParseTreeIndex(child)
      // 正常的搜索路径
      console.log(start, end, this.target)
      if (start <= this.target && this.target <= end) {
        return [context, ...this.visit(child)]
      }
      // 光标不落在一个正常的节点上时，搜索光标位置前一个正常节点
      if (start > this.target) {
        return [context, ...this.visit(lastNode)]
      }else if(!this.isErrorNode(child)){
        lastNode = child
      }
    }
    if (!lastNode) return [context]
    if (lastNode instanceof TerminalNode) return [context, lastNode]
    return [context, ...this.visit(lastNode)]
  }
}