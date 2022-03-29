class Test {
  test = () => {
    var m0
    // {"target": "m0", "pos":37}
  }
  test1 = function noDeclaration() {
    let m1
    // {"target": "m1", "pos":123}
    // {"target": "noDeclaration", "notDefined":true}
  }
  test2 = async function noDeclaration1() {
    const m2 = ''
    // {"target": "m2", "pos":273}
    // {"target": "noDeclaration1", "notDefined":true}
  }
  test3 = function* noDeclaration2() {
    const m3 = ''
    // {"target": "m3", "pos":424}
    // {"target": "noDeclaration2", "notDefined":true}
  }
  test4() {
    const m4 = ''
    // {"target": "m4", "pos":548}
  }
}
// {"target": "Test", "pos":5}
// {"target": "test", "notDefined":true}
// {"target": "test1", "notDefined":true}
// {"target": "test2", "notDefined":true}
// {"target": "test3", "notDefined":true}
// {"target": "test4", "notDefined":true}