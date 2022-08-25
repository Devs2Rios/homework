// -------------------------------------------------------------------------
// Coding challenge 17 - Part 10 #1
// -------------------------------------------------------------------------
'use strict';
const prompt = require('prompt-sync')();
// -------------------------------------------------------------------------
// Simple poll app!
// -------------------------------------------------------------------------
// Create a method called 'registerNewAnswer' on the 'poll' object
const poll = {
  question: 'What is your favorite programming language?\n',
  languages: ['JavaScript', 'Python', 'Rust', 'C++'],
  answers: [],
  registerNewAnswer(type, answer) {
    if (answer >= 0 && answer < this.languages.length) {
      if (answer !== 0) {
        const answerString = this.languages[answer];
        this.languages[answer] = this.languages[answer - 1];
        this.languages[answer - 1] = answerString;
      } else {
        console.log(`${this.languages[answer]} is already in first place!`);
      }
      this.answers.push(answer);
    } else {
      console.log(`${answer} isn't an existing option!`);
    }
    // Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
    return this.displayResults(type);
  },
  /*
  Create a method 'displayResults' which displays the poll results.
  The method takes a string as an input (called 'type'),
  which can be either 'string' or 'array'.
  If type is 'array', simply display the results array as it is,
  using console.log(). This should be the default option.
  If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
  */
  displayResults(type = 'array') {
    const strType = `Poll results: ${this.languages.join(', ')}`;
    if (type === 'array') {
      console.log(this.languages);
    } else if (type === 'string') {
      console.log(strType);
    } else if (type === 'string/array') {
      console.log(this.languages);
      console.log(strType);
    } else {
      console.log("type must be 'array' or 'string'");
    }
  },
};

// 1.1. Display a prompt window for the user to input the number of the selected option
const languagesStr = `${poll.languages
  .map((lang, i) => `${i}: ${lang}`)
  .join('\n')}\n`;
const inputanswer = Number(
  prompt(`${poll.question}${languagesStr}(Write option number) `)
);
poll.registerNewAnswer('string', inputanswer);
console.log(poll);
/*
Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
*/
const newPoll = {
  question: 'What is your favorite programming language?\n',
  languages: ['JavaScript', 'Python', 'Rust', 'C++', 'C'],
  answers: [],
  displayResults: poll.displayResults,
};
const newAnswerDbl = poll.registerNewAnswer.bind(newPoll, 'string/array');
// Test data
for (const tests of [
  [5, 2, 3],
  [1, 5, 3, 9, 6, 0],
]) {
  for (const test of tests) {
    console.log('\n\n');
    newAnswerDbl(test);
  }
}
console.log(newPoll);
// -------------------------------------------------------------------------
