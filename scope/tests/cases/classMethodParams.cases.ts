class Test {
  test = (test1, test2) => {
  	// {"target": "test1", "pos":23}
    // {"target": "test2", "pos":29}
  }
  test1 = function(test, ...rest) {
  	// {"target": "test", "pos":138}
    // {"target": "rest", "pos":147}
  }
  test2 = async function({test1, test2}) {
  	// {"target": "test1", "pos":258}
    // {"target": "test2", "pos":264}
  }
  test3([test1, test2]) {
  	// {"target": "test1", "pos":363}
    // {"target": "test2", "pos":369}
  }
}