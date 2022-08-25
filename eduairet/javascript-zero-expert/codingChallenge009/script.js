// Coding challenge 9 - Part 3 #1
'use strict';
// -----------------------------------------------
// Test data (arrays of forecasted maximum temperatures):
const data1 = [17, 21, 23],
  data2 = [12, 5, -5, 0, 4];
// Create a function 'printForecast' which takes in an array 'arr'.
const printForecast = arr => {
  const glyph = '…';
  // Use the map function to create an array from the given array with the desired structure
  // and join it into a string using a template literal
  const givenTemperatures = `${glyph} ${arr
    .map((temp, i) => {
      return `${temp}ºC in ${i + 1} day(s)`;
    })
    .join(` ${glyph} `)} ${glyph}`;
  // Return the string with the given temperatures.
  return givenTemperatures;
};
// Try it with both test datasets.
for (const dataSet of [data1, data2]) {
  console.log(printForecast(dataSet));
}
// -----------------------------------------------
