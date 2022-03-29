import Scope, { ScopeType } from './scope'
import AstCache from './ast'
const code = `let x = 1
const y = 2
var z = 3
{
  let x = 2
  const y = 3
  var z = 4
  // {"target": "x", "pos": 39}
  // {"target": "y", "pos": 53}
  // {"target": "z", "pos": 25}
}
// {"target": "x", "pos": 3}
// {"target": "y", "pos": 15}
// {"target": "z", "pos": 25}
`
const globalScope = new Scope({type: ScopeType.GLOBAL})
const cache = new AstCache('variableDeclaration.ts', code, globalScope)
const scope = cache.generateScope()
console.log(scope)