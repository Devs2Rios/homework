// -------------------------------------------------------------------------
// Coding challenge 20 - Part 11 #2
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
/*
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
*/
const calcAverageHumanAge = dogsAges =>
  /*
    Calculate the dog age in human years using the following formula:
    if the dog is <= 2 years old, humanAge = 2 * dogAge.
    If the dog is > 2 years old, humanAge = 16 + dogAge * 4
    -----------------------------------------------------------------
    Exclude all dogs that are less than 18 human years old
    -----------------------------------------------------------------
    Calculate the average human age of all adult dogs
  */
  dogsAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(hAge => hAge >= 18)
    .reduce(
      (acc, current, i, arr) => {
        console.log(
          `${`${i}`.padStart(2, '0')}.- ${acc.toFixed(2)} + ${current} / ${
            arr.length
          } = ${(acc + current / arr.length).toFixed(2)}`
        );
        return acc + current / arr.length;
      },
      0 // Valor inicial
    );
// Run the function for both test datasets
for (const dataset of [
  [5, 2, 4, 1, 15, 8, 3],
  [16, 6, 10, 5, 6, 1, 4],
])
  console.log(calcAverageHumanAge(dataset));
// -------------------------------------------------------------------------
