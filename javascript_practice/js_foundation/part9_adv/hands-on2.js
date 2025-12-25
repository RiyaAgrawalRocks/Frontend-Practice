function createCounter() {
  let count = 0;
  return function counting() {
    count++;
    return count;
  };
}

function rateLimiter(fn, limit) {
  let callable = true;
  // if (callable) {
  return function allow(...args) {
    if (!callable) return "Rate limit exceeded";
    // fn()
    callable = false;
    setTimeout(() => {
      callable = true;
    }, limit);
    return fn(...args);
  };
}

function memoize(fn) {
  // if(ca)
}
// let c1 = createCounter()
// let c2 = createCounter()
// console.log(c1());
// console.log(c2());
