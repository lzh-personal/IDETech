let i = 1
// {"target": "x", "hoisting": true }
// {"target": "z", "notDefined": true }
var {x, y} = {x: 1, y: {}}
// {"target": "x", "pos": 93}
// {"target": "y", "pos": 95}
const [k, v] = ['k', 'v']
// {"target": "k", "pos": 182}
// {"target": "v", "pos": 184}