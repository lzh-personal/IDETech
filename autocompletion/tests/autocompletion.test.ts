import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { Suggestion, VariableType } from '../Suggestion'
import { FormulaLexer } from '../FormulaLexer'
import { FormulaParser} from '../FormulaParser'

describe('autocompletion', () => {
  it('expression suggestion should renturn successfully', () => {
    const input = "te / 3"
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
    const result = suggestion.suggestion(1)
    expect(result.sort()).toEqual([ 'testFun1', 'testFun2' ].sort())
  })
  it('function expression params suggestion should renturn successfully', () => {
    const input = "1 + func(f + 3)"
    let inputStream = new ANTLRInputStream(input)
    let lexer = new FormulaLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new FormulaParser(tokenStream)
    let tree = parser.start()
    const suggestion = new Suggestion(tree)
    // 设置环境中存在的变量和函数
    suggestion.setvariable(['ftest1', 'ptest2'])
    suggestion.setFuncs([{
      name: 'func',
      params: [VariableType.NUMBER, VariableType.STRING],
      return: VariableType.NUMBER
    }])
    const result = suggestion.suggestion(9)
    expect(result.sort()).toEqual([ 'func', 'ftest1' ].sort())
  })
  it('function enum params suggestion should renturn successfully', () => {
    const input = "1 + func('f', 3)"
    let inputStream = new ANTLRInputStream(input)
    let lexer = new FormulaLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new FormulaParser(tokenStream)
    let tree = parser.start()
    const suggestion = new Suggestion(tree)
    // 设置环境中存在的变量和函数
    suggestion.setFuncs([{
      name: 'func',
      params: [['f1','f2','f3'], VariableType.NUMBER],
      return: VariableType.NUMBER
    }])
    const result = suggestion.suggestion(10)
    expect(result.sort()).toEqual([ 'f1', 'f2', 'f3' ].sort())
  })
  it('function with empty params suggestion should renturn successfully', () => {
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
    expect(result.sort()).toEqual([ 'ptest1', 'ptest2', 'testFun1', 'testFun2' ].sort())
  })
  it('incomplete expression suggestion should renturn successfully', () => {
    const input = "te / "
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
    const result = suggestion.suggestion(4)
    expect(result.sort()).toEqual([ 'ptest1', 'ptest2', 'testFun1', 'testFun2' ].sort())
  })
  it('incomplete expression should autocomplete if there is extra space', () => {
    const input = "te / "
    let inputStream = new ANTLRInputStream(input)
    let lexer = new FormulaLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new FormulaParser(tokenStream)
    let tree = parser.start()
    const suggestion = new Suggestion(tree)
    // 设置环境中存在的变量和函数
    suggestion.setvariable(['ptest1', 'ptest2'])
    const result = suggestion.suggestion(5)
    expect(result.sort()).toEqual(['ptest1', 'ptest2'].sort())
  })
  it('incomplete function enum suggestion should renturn successfully', () => {
    const input = "testFun2(1,"
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
    const result = suggestion.suggestion(11)
    expect(result.sort()).toEqual([ 'p1', 'p2', 'q2' ].sort())
  })
  it('incomplete function enum suggestion should renturn successfully (2)', () => {
    const input = "testFun2(1,p"
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
    const result = suggestion.suggestion(11)
    expect(result.sort()).toEqual([ 'p1', 'p2' ].sort())
  })
  it('incomplete function enum suggestion should renturn successfully (3)', () => {
    const input = "testFun2(1,)"
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
    const result = suggestion.suggestion(10)
    expect(result.sort()).toEqual([ 'p1', 'p2', 'q2' ].sort())
  })
  it('incomplete function suggestion should renturn successfully', () => {
    const input = "testFun2("
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
    const result = suggestion.suggestion(9)
    expect(result.sort()).toEqual([ 'ptest1', 'ptest2', 'testFun1', 'testFun2' ].sort())
  })
  it('should not autocomplete while cursor hoving after a opertion', () => {
    const input = "te /    p"
    let inputStream = new ANTLRInputStream(input)
    let lexer = new FormulaLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new FormulaParser(tokenStream)
    let tree = parser.start()
    const suggestion = new Suggestion(tree)
    // 设置环境中存在的变量和函数
    suggestion.setvariable(['ptest1', 'ptest2'])
    const result = suggestion.suggestion(6)
    expect(result.sort()).toEqual([ ].sort())
  })
  it('should autocomplete while cursor hoving after a variable', () => {
    const input = "te / p    + 5"
    let inputStream = new ANTLRInputStream(input)
    let lexer = new FormulaLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new FormulaParser(tokenStream)
    let tree = parser.start()
    const suggestion = new Suggestion(tree)
    // 设置环境中存在的变量和函数
    suggestion.setvariable(['ptest1', 'ptest2'])
    const result = suggestion.suggestion(6)
    expect(result.sort()).toEqual(['ptest1', 'ptest2'].sort())
  })
})