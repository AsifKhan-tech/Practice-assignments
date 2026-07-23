"use strict";

/*
let age = 18;
if (age === 18) {
  console.log("You are an adult!");
}

//always use strict(===) equality operator

const favNumber = Number(prompt("Enter your fav number"));
console.log("Input num:", favNumber);

//"1" == 1(equal)
// if (favNumber == 1) console.log(`(loose) fav num: ${favNumber}`);
//"1"===1(not equal)
if (favNumber === 1) {
  console.log(`(strict) fav num: ${favNumber}`);
} else if (favNumber === 8) {
  console.log(`(strict) fav num: ${favNumber}`);
} else if (favNumber === 10) {
  console.log(`you are near!`);
} else {
  console.log("Best of luck!");
}

if (favNumber !== 1) console.log("why not:", favNumber);
*/

/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Ayan can drive!");
// } else {
//   console.log("Altmash should drive!");
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTires);

//when to drive
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Ayan can drive!");
} else {
  console.log("Altmash should drive!");
}

*/
// const dolphinsAvgScore = (96 + 108 + 89) / 3;
// const koalasAvgScore = (88 + 91 + 110) / 3;
// console.log(dolphinsAvgScore, ":", koalasAvgScore);

// if (dolphinsAvgScore > koalasAvgScore) {
//   console.log("Dolphins win the trophy!", dolphinsAvgScore);
// } else if (koalasAvgScore > dolphinsAvgScore) {
//   console.log("Koalas win the trophy!", dolphinsAvgScore);
// } else {
//   console.log("Drawww...!", dolphinsAvgScore, koalasAvgScore);
// }

const dolphinsAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 106) / 3;
console.log(dolphinsAvgScore, ":", koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
  console.log("Dolphins win the trophy!", dolphinsAvgScore);
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
  console.log("Koalas win the trophy!", dolphinsAvgScore);
} else if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log("Drawww...! Share the trophy", dolphinsAvgScore, koalasAvgScore);
} else {
  console.log("No one win the trophy");
}
