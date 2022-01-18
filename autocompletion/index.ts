import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { Suggestion, VariableType } from './Suggestion'
import { FormulaLexer } from './FormulaLexer'
import { FormulaParser} from './FormulaParser'
const input = "testFun2()"
let inputStream = new ANTLRInputStream(input)
let lexer = new FormulaLexer(inputStream)
let tokenStream = new CommonTokenStream(lexer)
let parser = new FormulaParser(tokenStream)
let tree = parser.start()
const suggestion = new Suggestion(tree)
// 设置环境中存在的变量和函数
suggestion.setvariable(['ptest1', 'ptest2'])
suggestion.setFuncs([{
  name: 'testFun1',
  params: [VariableType.NUMBER, VariableType.STRING],
  return: VariableType.NUMBER
}, {
  name: 'testFun2',
  params: [VariableType.NUMBER, ['p1', 'p2', 'q2']],
  return: VariableType.NUMBER
}, {
  name: 'testFun3',
  params: [],
  return: VariableType.STRING
}])
const result = suggestion.suggestion(8)
console.log(result)
