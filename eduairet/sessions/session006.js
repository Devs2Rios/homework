// Decomposing functions Array.prototype.sort()
'use strict';

// Returns the same array object sorted
let arr = [3, 3, 3, 3, 3, 5, 10];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] < arr[j + 1]) {
      let buble = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = buble;
    }
  }
}
console.log('//////////////////////////////');
console.log(arr);
console.log('//////////////////////////////\n');

// Returns a new array object sorted
arr = [3, 3, 3, 3, 3, 5, 10];
const sortedArr = [];
let counter = 0;
while (arr.length) {
  if (arr[counter] === Math.max(...arr)) {
    sortedArr.push(Math.max(...arr));
    arr.pop();
    counter = 0;
  } else {
    counter++;
  }
}
console.log('*********************************');
console.log(sortedArr);
console.log('*********************************\n');
