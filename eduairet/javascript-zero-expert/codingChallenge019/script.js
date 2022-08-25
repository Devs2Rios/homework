// -------------------------------------------------------------------------
// Coding challenge 19 - Part 11 #1
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
/*
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
*/
const checkDogs = (dogsJulia, dogsKate) => {
  /*
  Julia found out that the owners of the first and the last two dogs actually have
  cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
  ages from that copied array (because it's a bad practice to mutate function
  parameters)
  */
  const juliasNoCats = [...dogsJulia].splice(1, dogsJulia.length - 3);
  // Create an array with both Julia's (corrected) and Kate's data
  juliasNoCats.concat(dogsKate).forEach((age, i) =>
    /*
    For each remaining dog, log to the console whether it's an adult ("Dog number 1
    is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
    */
    console.log(
      `Dog number ${i + 1} is ${
        age >= 3 ? `an adult and is ${age} years old` : 'still a puppy 🐶'
      }`
    )
  );
};
// Run the function for both test datasets
const tests = [
  [
    [3, 5, 2, 12, 7],
    [4, 1, 15, 8, 3],
  ],
  [
    [9, 16, 6, 8, 3],
    [10, 5, 6, 1, 4],
  ],
];
tests.forEach(([dogsJulia, dogsKate]) => {
  checkDogs(dogsJulia, dogsKate);
});
// -------------------------------------------------------------------------
