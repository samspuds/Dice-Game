"use strict";
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const message = document.getElementById("message");
// const player1 = document.getElementById("player1");
const scoreboard1 = document.getElementById("scoreboard1");
const scoreboard2 = document.getElementById("scoreboard2");
const diceRoll1 = document.getElementById("dice-roll1");
const diceRoll2 = document.getElementById("dice-roll2");
const diceRoll = document.getElementById("dice-roll");
const reset = document.getElementById("reset");

diceRoll.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    diceRoll1.textContent = randomNumber;
    scoreboard1.textContent = player1Score;
  } else {
    player2Score += randomNumber;
    diceRoll2.textContent = randomNumber;
    scoreboard2.textContent = player2Score;
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 Wins";
    diceRoll.style.display = "none";
    reset.style.display = "block";
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 wins";
    diceRoll.style.display = "none";
    reset.style.display = "block";
  }

  player1Turn = !player1Turn;
});

reset.addEventListener("click", function () {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  message.textContent = "Roll the Dice";
  diceRoll.style.display = "block";
  reset.style.display = "none";
  diceRoll1.textContent = "-";
  diceRoll2.textContent = "-";
  scoreboard1.textContent = player1Score;
  scoreboard2.textContent = player2Score;
});

// function rolledDice() {
//   diceRoll1.textContent = Math.floor(Math.random() * 6) + 1;
// }
