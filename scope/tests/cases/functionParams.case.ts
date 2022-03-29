function testfunc(test1, test2) {
// {"target": "test1", "pos":18}
// {"target": "test2", "pos":24}
}
function *testGen(test, ...rest) {
// {"target": "test", "pos":120}
// {"target": "rest", "pos":129}
}
async function testAsync({test1, test2}) {
// {"target": "test1", "pos":231}
// {"target": "test2", "pos":237}
}
const f = ([test1, test2]) => {
// {"target": "test1", "pos":330}
// {"target": "test2", "pos":336}
}