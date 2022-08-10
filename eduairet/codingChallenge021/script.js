// -------------------------------------------------------------------------
// Coding challenge 20 - Part 11 #3
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
/*
Refactor the challenge #2
*/
const calcAverageHumanAge = dogsAges =>
  dogsAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(hAge => hAge >= 18)
    .reduce((acc, current, i, arr) => acc + current / arr.length, 0);
const datasets = [
  [5, 2, 4, 1, 15, 8, 3],
  [16, 6, 10, 5, 6, 1, 4],
];
for (const dataset of datasets) console.log(calcAverageHumanAge(dataset));
// -------------------------------------------------------------------------
