// -------------------------------------------------------------------------
// Coding challenge 13 - Part 9 #1
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
// Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
/*
The first player in any player array is the fullback and the others are field players.
For Springboks (team 1) create one variable ('fb') with the fullback's name,
and one array ('fieldPlayers') with all the remaining 14 field players
*/
const [fb, ...fieldPlayers] = players1;
console.log(fb, fieldPlayers);
// Create an array 'allPlayers' containing all players of both teams (30 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
/*
During the game, Springboks (team 1) used 3 substitute players.
So create a new array ('players1Final') containing all the original team1 players
plus 'Brendan Venter', 'Rudolf Straeuli' and 'Garry Pagel'
*/
const players1Final = [
  ...players1,
  'Brendan Venter',
  'Rudolf Straeuli',
  'Garry Pagel',
];
console.log(players1Final);
// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log(team1, draw, team2);
/*
Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/
const printGoals = function(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(
      `${playerNames[i]} - ${i + 1} of ${playerNames.length} players`
    );
  }
};
printGoals('Jonah Lomu', 'Andrew Mehrtens', 'Graeme Bachop', 'Zinzan Brooke');
printGoals(...game.scored);
/*
The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
*/
console.log(
  `${(team1 < team2 && game.team1) || game.team2} are more likely to win`
);
// -------------------------------------------------------------------------
