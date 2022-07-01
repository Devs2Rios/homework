/* 
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

/*
pseudo-code
1.-we have to read the whole array to print as many times the days and the temperature as the array is long
2.-we need to extract the value of each index iside of the array and interpolate that value in the string
3.-we need to make some sort of count and interpolate it too in the string so it increments
*/

const arr = [17, 21, 23];
const arr2 = [2, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "...";
  let supStr = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(`${str} ${arr[i]} in ${i + 1} days ${str}`);
    supStr += `${str} ${arr[i]}ºC in ${i + 1} days`;
  }
  return supStr;
}

console.log(printForecast(arr));
console.log(printForecast(arr2));
