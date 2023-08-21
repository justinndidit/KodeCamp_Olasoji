"use strict";
const input = require("prompt-sync")();

const num = Math.trunc(Math.random() * 10 + 1);

function guessNumber(number) {
  console.log("Game started\n");
  let won = false;
  console.log('Please Enter "0" to quit\n');
  do {
    const guess = input("what is your Guess?: ");
    if (Number(guess) === number) {
      won = true;
      console.log("You Won\n");
    } else if (guess === "exit") {
      const cancel = input("Please enter N to exit game and Y to continue: ");
      if (cancel === "n" || cancel === "N") {
        process.exit(0);
      } else {
        guessNumber(number);
      }
    } else {
      console.log("You lose");

      if (guess < number) {
        console.log("Hint: You need to guess higher\n");
      } else {
        console.log("Hint: You need to guess lower\n");
      }
    }
  } while (num !== "exit");

  console.log("Game Ended\n");
}

guessNumber(num);
