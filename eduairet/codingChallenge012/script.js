// -------------------------------------------------------------------------
// Coding challenge 12 - Part 7 #3
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
// Mutable variables
// -------------------------------------------------------------------------
let cRoll,
  cScore,
  cPlayer,
  cPlayerSection,
  cPlayerIndex,
  cPlayerName,
  cPlayerScore,
  cPlayerCScore,
  endGame;
// -------------------------------------------------------------------------
// Constant variables
// -------------------------------------------------------------------------
// Random dice number
const rollDiceNumber = () => 1 + Math.round(Math.random() * 5);
// Player object
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
// HTML elements
// -------------------------------------------------------------------------
const dice = document.querySelector('.dice'),
  rollDice = document.querySelector('.btn.btn--roll'),
  hold = document.querySelector('.btn.btn--hold'),
  newGame = document.querySelector('.btn.btn--new'),
  playerSection1 = document.querySelector('.player--0'),
  playerSection2 = document.querySelector('.player--1');
// -------------------------------------------------------------------------
// Presets
// -------------------------------------------------------------------------
// Current player definer
const defCPlayer = () => {
  cPlayerIndex = player.one.turn ? 0 : 1;
  cPlayer = player[cPlayerIndex === 0 ? 'one' : 'two'];
  cPlayerSection = document.querySelector(`.player--${cPlayerIndex}`);
  cPlayerScore = document.getElementById(`score--${cPlayerIndex}`);
  cPlayerCScore = document.getElementById(`current--${cPlayerIndex}`);
  cPlayerName = document.getElementById(`name--${cPlayerIndex}`);
};
// Preset function
const preset = () => {
  dice.classList.add('hidden');
  dice.src = 'dice-1.png';
  player.one.turn = true;
  player.two.turn = !player.one.turn;
  for (const playerClassEl of document.querySelectorAll('.player')) {
    if (playerClassEl.classList.contains('player--winner')) {
      playerClassEl.classList.remove('player--winner');
    }
  }
  for (let i = 0; i < 2; i++) {
    player[i === 0 ? 'one' : 'two'].score = 0;
    document.getElementById(`name--${i}`).textContent = `Player ${i + 1}`;
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
  }
  cScore = 0;
  cRoll = 0;
  endGame = false;
  playerSection1.classList.add('player--active');
  defCPlayer();
};
// Preset call when the page is loaded
preset();
// -------------------------------------------------------------------------
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
    cPlayerSection.classList.remove('player--active');
    cPlayerSection.classList.add('player--winner');
  }
  if (!endGame) {
    playerSection1.classList.toggle('player--active');
    playerSection2.classList.toggle('player--active');
    cPlayerScore.textContent = cPlayer.score;
    cPlayerCScore.textContent = 0;
    cScore = -1;
    player.changeTurn();
    defCPlayer();
  }
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
        dice.classList.add('hidden');
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
