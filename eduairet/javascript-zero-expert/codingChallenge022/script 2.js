// -------------------------------------------------------------------------
// Coding challenge 20 - Part 11 #4
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
/*
Julia and Kate are still studying dogs,
and this time they are studying if dogs
are eating too much or too little.
Eating too much means the dog's current food portion
is larger than the recommended portion,
and eating too little is the opposite.
Eating an okay amount means the dog's current food portion
is within a range 10% above and 10% below the recommended portion.
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// Util
const dogsEating = dog => {
  return dog.curFood > dog.recommendedFood
    ? 'Too much!'
    : dog.curFood === dog.recommendedFood
    ? 'OK!'
    : 'Too little!';
};
const goodEating = dog => {
  return (
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
  );
};
// Loop over the 'dogs' array containing dog objects
// Do not create a new array, simply loop over the array.
dogs.forEach(dog => {
  // For each dog calculate the recommended food portion
  // and add it to the object as a new property.
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  // (The result is in grams of food, and the weight needs to be in kg)
});
// Find Sarah's dog and log to the console whether it's eating too much or too little.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `${sarahDog.owners[0]}'s dog is eating ${dogsEating(
    sarahDog
  )[0].toLowerCase()}${dogsEating(sarahDog).slice(1)}`
);
// Create an array containing all owners of dogs who eat too much
// and an array with all owners of dogs who eat too little
const ownersEatTooMuch = dogs.filter(dog => dogsEating(dog) === 'Too much!'),
  ownersEatTooLittle = dogs.filter(dog => dogsEating(dog) === 'Too little!');
// Log a string to the console for each array created in 3
console.log(
  `${ownersEatTooMuch
    .flatMap(dog => dog.owners)
    .join(' and ')}'s dogs eat too much!`
);
console.log(
  `${ownersEatTooLittle
    .flatMap(dog => dog.owners)
    .join(' and ')}'s dogs eat too little!"`
);
// Log to the console whether there is any dog eating exactly the amount of food that is recommended
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// Log to the console whether there is any dog eating an okay amount of food
console.log(dogs.some(goodEating));
// Create an array containing the dogs that are eating an okay amount of food
const goodDogs = dogs.filter(goodEating);
console.log(goodDogs);
// Create a shallow copy of the 'dogs' array and sort it
// by recommended food portion in an ascending order
const dogsSorted = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(dogsSorted);
// -------------------------------------------------------------------------
