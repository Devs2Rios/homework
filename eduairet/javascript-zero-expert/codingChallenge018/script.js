// -------------------------------------------------------------------------
// Coding challenge 18 - Part 10 #2
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
/*
Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
*/
const rCl = () => Math.round(Math.random() * 255);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  // Here the first function disapears (not red again)
  // but creates a closure that's passed to the body eventListener
  document.body.addEventListener('click', function () {
    header.style.color = `rgb(${rCl()}, ${rCl()}, ${rCl()})`;
  });
})();
// -------------------------------------------------------------------------
