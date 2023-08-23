"use strict";
const input = require("prompt-sync")();

let isPlaying = true;

function guessNumber() {
  console.log("Game started\n");
  console.log('Please Enter "Exit" to quit Game\n');

  const num = Math.trunc(Math.random() * 10 + 1);
  
  const guess = input("what is your Guess?: ");

  if (Number(guess) === num) {
    console.log("You Won\n");
  } else if (guess.toLowerCase() === "exit") {
    const cancel = input("Please enter N to exit game and Y to continue: ");
    if (cancel === "n" || cancel === "N") {
      isPlaying = false;
    } else {
      guessNumber();
    }
  } else {
    console.log("You lose! The random number generated is " + num);
  }

  console.log("Game Ended\n");
}

do {
  guessNumber();
} while (isPlaying);
