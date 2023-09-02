
const list = [1721, 979, 366, 299, 675, 1456];
let result;


list.forEach((num1) => {
  list.forEach((num2) => {
    if (num1 + num2 === 2020) {
      result = num1 * num2;
    }
  });
});

console.assert(
  result === 514579,
  `The result is not correct, it is ${result}, but should be 514579`
);

