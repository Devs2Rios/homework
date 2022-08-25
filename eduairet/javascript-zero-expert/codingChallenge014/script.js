// -------------------------------------------------------------------------
// Coding challenge 14 - Part 9 #2
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
// Game object
// -------------------------------------------------------------------------
const game = {
  team1: 'Springboks',
  team2: 'All Blacks',
  players: [
    [
      'André Joubert',
      'James Small',
      'Japie Mulder',
      'Hennie le Roux',
      'Chester Williams',
      'Joel Stransky',
      'Joost van der Westhuizen',
      'Mark Andrews',
      'Ruben Kruger',
      'Francois Pienaar',
      'Hannes Strydom',
      'Kobus Wiese',
      'Balie Swart',
      'Chris Rossouw',
      'Os du Randt',
    ],
    [
      'Glen Osborne',
      'Jeff Wilson',
      'Frank Bunce',
      'Walter Little',
      'Jonah Lomu',
      'Andrew Mehrtens',
      'Graeme Bachop',
      'Zinzan Brooke',
      'Josh Kronfeld',
      'Mike Brewer',
      'Robin Brooke',
      'Ian Jones',
      'Olo Brown',
      'Sean Fitzpatrick',
      'Craig Dowd',
    ],
  ],
  score: '15:12',
  scored: ['Joel Stransky', 'Andrew Mehrtens'],
  date: 'Jun 24th, 1995',
  odds: {
    team1: 3.04,
    x: 4.58,
    team2: 2.38,
  },
};
// -------------------------------------------------------------------------
// Solution
// -------------------------------------------------------------------------
/*
Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/
for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);
/*
Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember).
Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
*/
const odds = Object.entries(game.odds);
let avg = 0;
for (const [odd, oddValue] of odds) {
  console.log(
    `Odd off ${odd === 'x' ? 'draw' : `victory ${game[odd]}`}: ${oddValue}`
  );
  avg += oddValue;
}
avg /= odds.length;
console.log(avg);
/*
Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{ Joel Stransky: 15, Andrew Mehrtens: 12 }
*/
const scorers = Object.fromEntries(
  game.scored.map((player, i) => {
    return [player, game.score.split(':')[i]];
  })
);
console.log(scorers);
// -------------------------------------------------------------------------
