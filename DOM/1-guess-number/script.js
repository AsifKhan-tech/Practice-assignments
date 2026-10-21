"use strict";
/*
document.querySelector(".message");
document.querySelector(".number");
document.querySelector(".score");
document.querySelector(".guess");
*/
const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guessVal = Number(document.querySelector(".guess").value);
  if (!guessVal) {
    document.querySelector(".message").textContent = "⛔️ no number!";
  } else if (guessVal === randomNumber) {
    document.querySelector(".message").textContent = "🎉 correct number!";
  } else if (guessVal > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You have lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessVal < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥 You have lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
