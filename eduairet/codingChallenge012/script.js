// -------------------------------------------------------------------------
// Coding challenge 10 - Part 7 #3
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
// Utility
// -------------------------------------------------------------------------
const rollDiceNumber = () => 1 + Math.round(Math.random() * 5);
// -------------------------------------------------------------------------
// Player object
// -------------------------------------------------------------------------
const player = {
  one: { turn: true, score: 0 },
  two: { turn: false, score: 0 },
  changeTurn: function() {
    this.one.turn = !this.one.turn;
    this.two.turn = !this.two.turn;
  },
  addScore: function(index, score) {
    this[index === 0 ? 'one' : 'two'].score += score;
  },
};
// -------------------------------------------------------------------------
// Mutable variables
// -------------------------------------------------------------------------
let cRoll,
  cScore,
  cPlayer,
  cPlayerIndex,
  cPlayerName,
  cPlayerScore,
  cPlayerCScore,
  endGame;
// -------------------------------------------------------------------------
// HTML elements
// -------------------------------------------------------------------------
const dice = document.querySelector('.dice'),
  rollDice = document.querySelector('.btn.btn--roll'),
  hold = document.querySelector('.btn.btn--hold'),
  newGame = document.querySelector('.btn.btn--new');
// -------------------------------------------------------------------------
// Define current player
const defCPlayer = () => {
  cPlayerIndex = player.one.turn ? 0 : 1;
  cPlayer = player[cPlayerIndex === 0 ? 'one' : 'two'];
  cPlayerScore = document.querySelector(`#score--${cPlayerIndex}`);
  cPlayerCScore = document.querySelector(`#current--${cPlayerIndex}`);
  cPlayerName = document.querySelector(`#name--${cPlayerIndex}`);
  cPlayerName.classList.add('playing');
  document
    .querySelector(`#name--${player.one.turn ? 1 : 0}`)
    .classList.remove('playing');
};
// Presets
const preset = () => {
  dice.classList.add('hidden');
  dice.src = `dice-1.png`;
  player.one.turn = true;
  player.two.turn = !player.one.turn;
  for (const pScore of [player.one, player.two]) pScore.score = 0;
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#name--${i}`).textContent = `Player ${i + 1}`;
  }
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = 0;
  }
  for (let i = 0; i < 2; i++) {
    document.querySelector(`#current--${i}`).textContent = 0;
  }
  cScore = 0;
  cRoll = 0;
  endGame = false;
  defCPlayer();
};
preset();
// Game
// -------------------------------------------------------------------------
// Flush manages the score accounting and changes player
const flush = () => {
  if (cScore !== -1) {
    player.addScore(cPlayerIndex, cScore);
  }
  if (cPlayer.score >= 100) {
    endGame = true;
    cPlayerName.textContent = 'Winner!';
  }
  cPlayerScore.textContent = cPlayer.score;
  cPlayerCScore.textContent = 0;
  cScore = -1;
  player.changeTurn();
  defCPlayer();
};
// Throw your dice
rollDice.addEventListener('click', function() {
  if (!endGame) {
    cRoll = rollDiceNumber();
    dice.src = `dice-${cRoll}.png`;
    dice.classList.remove('hidden');
    switch (cRoll) {
      case 1:
        flush();
      default:
        cScore += cRoll;
        cPlayerCScore.textContent = cScore;
        cPlayerScore.textContent = cPlayer.score;
    }
  }
});
// Hold your score
hold.addEventListener('click', function() {
  if (!endGame) flush();
});
// Start a new game
newGame.addEventListener('click', preset);
// -------------------------------------------------------------------------
