function test1() {}
const test2 = () => {}
const test3 = function noDeclaration() {}
function *testGen1() {}
async function testAsync1() {}
const testGen2 = function* noDeclaration1() {}
const testAsync2 = async () => {}
const testAsync3 = async function noDeclaration2() {}
// {"target": "test1", "pos": 8}
// {"target": "test2", "pos": 25}
// {"target": "test3", "pos": 48}
// {"target": "testGen1", "pos": 95}
// {"target": "testAsync1", "pos": 123}
// {"target": "testGen2", "pos": 145}
// {"target": "testAsync2", "pos": 192}
// {"target": "testAsync3", "pos": 226}
// {"target": "noDeclaration", "notDefined": true}
// {"target": "noDeclaration1", "notDefined": true}
// {"target": "noDeclaration1", "notDefined": true}