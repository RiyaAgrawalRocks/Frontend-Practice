function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

function rangeIterator(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr.values()
}

function* fibonacciGenerator() {
    let a = 1
    let b = 1
    let c
    // if(a === 1)
    //     yield a
    // if(a !== 1 && b === 1)
    //     yield b
    // else {
    //     c = a + b
    //     a = b
    //     b = c
    //     yield c
    // }
    yield a
    yield b
    for (; ;){
        c = a + b
        a = b
        b = c
        yield c
    }
}
