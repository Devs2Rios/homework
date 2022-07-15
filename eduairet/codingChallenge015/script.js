// -------------------------------------------------------------------------
// Coding challenge 15 - Part 9 #3
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
// Game map
// -------------------------------------------------------------------------
const rwc1995final = new Map([
  [5, '🏉 Penalty'],
  [10, '🏉 Penalty'],
  [13, '🏉 Penalty'],
  [22, '🏉 Penalty'],
  [31, '🏉 Drop Goal'],
  [40, '🔁 Substitution'],
  [55, '🏉 Drop Goal'],
  [55, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [67, '🚑 First Aid Sub'],
  [68, '🔁 Substitution'],
  [70, '🔁 Substitution'],
  [83, '🏉 Penalty'],
  [83, '🔁 Substitution'],
  [90, '🏉 Penalty'],
  [90, '🔁 Substitution'],
  [92, '🏉 Drop Goal'],
  [97, '🔁 Substitution'],
]);
// -------------------------------------------------------------------------
// Solution
// -------------------------------------------------------------------------
// Create an array 'events' of the different game events that happened (no duplicates)
const events = new Set(rwc1995final.values());
console.log(events);
// After the game has finished, is was found that the yellow card from minute 64 never happend. So remove this event from the game events log.
rwc1995final.delete(64);
console.log(rwc1995final);
// Compute and log the following string to the console:
// "An event happened, on average, every 9 minutes" (keep in mind that a game has 100 minutes [with extra time]).
const eventTimes = new Set(rwc1995final.keys());
// With loops
let eventAvg = 0,
  prevVal = 0;
for (const event of eventTimes) {
  eventAvg += event - prevVal;
  prevVal = event;
}
eventAvg /= eventTimes.size;
console.log(
  `An event happened, on average, every ${eventAvg.toFixed(2)} minutes`
);
// Smarter
console.log(
  `An event happened, on average, every ${(
    [...eventTimes].pop() / eventTimes.size
  ).toFixed(2)} minutes`
);
// Loop over 'rwc1995final' and log each element to the console,
// marking whether it's in the first half or second half (after 40 min) of the game, like this:
// [FIRST HALF] 13, '🏉 Penalty',
for (const [time, event] of rwc1995final) {
  console.log(
    `[${
      (time > 80 && 'EXTRA') || (time < 40 && 'FIRST') || 'SECOND'
    }] ${time} ${event}`
  );
}

// -------------------------------------------------------------------------
