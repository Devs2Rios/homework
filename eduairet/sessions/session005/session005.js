/*
8 Jul 2022 - Rank Vector
https://www.codewars.com/kata/545f05676b42a0a195000d95/train/javascript
*/
// -----------------------------------------------------
tests = [
  [9, 3, 6, 10], // [2,4,3,1]
  [3, 3, 3, 3, 3, 5, 1], // [2,2,2,2,2,1,7]
];

const ranks = a => {
  return a.map(num => [...a].sort((a, b) => b - a).indexOf(num) + 1);
};

for (const test of tests) {
  console.log(ranks(test));
}
// -----------------------------------------------------
