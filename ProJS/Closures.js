function add() {
  let counter = 0;
  return function plus() {
    counter += 1;
  };
  plus();
  return counter;
}

console.log(add());

const add2 = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add2());
console.log(add2());
console.log(add2());

// the counter is now 3

function incre() {
  let count = 101;
  return function () {
    count--;
    return count;
  };
}

const op = incre();
// console.log(op());
// console.log(op());

const output = setInterval(() => {
  const k = op();
  console.log(k);
}, 1000);
