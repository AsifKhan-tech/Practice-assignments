"use strict";
/*
document.querySelector(".message");
document.querySelector(".number");
document.querySelector(".score");
document.querySelector(".guess");
*/
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guessVal) {
    // document.querySelector(".message").textContent = "⛔️ no number!";
    displayMessage("⛔️ no number!");

    //when player win
  } else if (guessVal === randomNumber) {
    // document.querySelector(".message").textContent = "🎉 correct number!";
    displayMessage("🎉 correct number!");
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessVal !== randomNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guessVal > randomNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guessVal > randomNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "💥 You have lost the game";
      displayMessage("💥 You have lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is too high
  // else if (guessVal > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "💥 You have lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guessVal < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "💥 You have lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
