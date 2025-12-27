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
  let cache = new Map()
  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key))
      return cache[key]
    const res = fn(...args)
    cache[key] = res
    return res
  }
}

// let c1 = createCounter()
// let c2 = createCounter()
// console.log(c1());
// console.log(c2());
