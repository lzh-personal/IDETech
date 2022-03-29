// {"target": "testBlock", "hoisting": true}
const testBlock = () => {
  const testBlock: string = ''
  // {"target": "testBlock", "pos": 78}
}
function testfunc() {
  let testfunc
  // {"target": "testfunc", "pos": 171}
}
function *testGen() {
  var testGen
  // {"target": "testGen", "pos": 250}
}
async function testAsync() {
  const testAsync: string = ''
  // {"target": "testAsync", "pos": 336}
}
// {"target": "testBlock", "pos":50}
// {"target": "testfunc", "pos":152}
// {"target": "testGen", "pos":233}
// {"target": "testAsync", "pos":314}