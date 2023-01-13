function memoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const product = (num1, num2) => {
  for (let i = 1; i < 9999999; i++) {}
  return num1 * num2;
};

const memoCall = memoize(product);

console.time("1----");
console.log(memoCall(9810, 8971));
console.timeEnd("1----");

console.time("2----");
console.log(memoCall(9810, 8971));
console.timeEnd("2----");
