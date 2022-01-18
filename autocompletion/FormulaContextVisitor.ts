import { ConstantAtomContext, ConstantContext, ExpressionContext, FunctionAtomContext, FunctionContext, NumberAtomContext, ParamContext, StartContext, StringContext, VariableAtomContext } from './FormulaParser'
import { FormulaVisitor } from './FormulaVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { ParserRuleContext } from 'antlr4ts'

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
    return this.visitContext(context.expression())
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
    return this.visitContext(context)
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

  /** 查寻找最接近给定 target 位置的节点 */
  private visitContext(context: ParserRuleContext): ParseTree[] {
    let targetChild: ParseTree
    for (let i = 0; i < context.childCount; i++) {
      const child = context.getChild(i)
      const [ start, end ] = this.getParseTreeIndex(child)
      console.log(start, end, this.target)
      if (start <= this.target && this.target <= end) {
        targetChild = child
        break
      }
      if (start > this.target) {
        const [ _, lastEnd ] = this.getParseTreeIndex(targetChild)
        // 如果当前节点相比上一个节点更接近 target，递归当前节点，否则，递归上一个节点
        if (Math.abs(lastEnd - this.target) >= Math.abs(start - this.target)) {
          return [context, ...this.visit(child)]
        }else {
          return [context, ...this.visit(targetChild)]
        }
      }
      if (end < this.target) {
        // 如果存在连续的多个词法符号补全，我们取最靠前的，如果后续有正常的节点，就继续往后取最接近的
        if (targetChild instanceof ParserRuleContext && targetChild.exception) {
          continue
        }
        targetChild = child
        continue
      }
    }
    // 遍历完所有子节点后，没有找到合适的节点递归，当前光标的位置的 index 超过所有节点，为了寻找最接近的节点
    // 在存在子节点是仍继续向下遍历
    if (targetChild) {
      return [context, ...this.visit(targetChild)]
    }
    return [context]
  }
}