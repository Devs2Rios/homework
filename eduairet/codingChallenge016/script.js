// -------------------------------------------------------------------------
// Coding challenge 16 - Part 9 #4
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
// Solution
// -------------------------------------------------------------------------
/*
Write a program that receives a list of variable names written in snake_case
and convert them to camelCase. The input will come from a text area
*/
// Create paragrap
const createParagraph = (txt, parentID) => {
  const p = document.createElement('p');
  const node = document.createTextNode(txt);
  p.appendChild(node);
  const parent = document.getElementById(parentID);
  parent.appendChild(p);
};
// Single word conversion
const snakeToCamel = str => {
  return str
    .trim()
    .replace(
      /_[^_]+/g,
      match => `${match[1].toUpperCase()}${match.slice(2).toLowerCase()}`
    );
};
// Text area conversion
const snakeToCamelTextArea = function (e) {
  // Prevent reload
  e.preventDefault();
  // Reset the result
  const result = document.getElementById('camel-case');
  result.innerHTML = '';
  // Add the new result
  const textArea = document.getElementById('snake-words');
  const textAreaList = textArea.value.split(/[\r\n]/);
  const padLength = Math.max(...textAreaList.map(word => word.trim().length));
  // First word
  for (const [i, camel] of textAreaList.entries()) {
    createParagraph(
      `${snakeToCamel(camel.toLowerCase()).padEnd(
        padLength,
        '\u00A0'
      )} ${'✅'.repeat(i + 1)}\n`,
      'camel-case'
    );
  }
};
const testText = `underscore_case
  first_name 
Some_Variable 
 calculate_AGE
delayed_departure`;

document.getElementById('snake-words').value = testText;
document
  .getElementById('transform')
  .addEventListener('click', snakeToCamelTextArea);
// -------------------------------------------------------------------------
