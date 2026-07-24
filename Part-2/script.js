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

/*
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
*/

/*
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

const numNeighbours = prompt(
  "How many neighbour countries does your country have?",
);
if (numNeighbours == 8) {
  console.log(`My country has ${numNeighbours} borders.`);
}
*/

/*
const language = prompt("Which language is speak in your country?");

switch (language) {
  // case "Chinese || Mandarin":{ It will wrongly evaluate, switch checks for one case to compare with the input}

  case "Chinese":
  case "Mandarin":
    {
      console.log("Most numbers of native speackers");
    }
    break;
  case "Spanish":
    {
      console.log("2nd place in number of native speakers");
    }
    break;
  case "English":
    {
      console.log("3rd place in number of native speakers");
    }
    break;
  case "Hindi":
    {
      console.log("4th place in number of native speakers");
    }
    break;
  case "Arabic":
    {
      console.log("4th place in number of native speakers");
    }
    break;
  default:
    {
      console.log("Your language is beautiful");
    }
    break;
}
*/

const day = "Wednesday";
/*
switch (day) {
  case "Monday": // day === "Monday"
    console.log("Plan whole week stuff");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Design the database");
    break;
  case "Wednesday": //Same case will execute for two different values
  case "Thrusday":
    console.log("Structure the project");
    break;
  case "Friday":
    console.log("Start to work on project");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekends");
    break;
  default:
    console.log("No tension ");
    break;
}


if (day === "Monday") {
  console.log("Plan whole week stuff");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Design the database");
} else if (day === "Wednesday" || day === "Thrusday") {
  console.log("Structure the project");
} else if (day === "Friday") {
  console.log("Start to work on project");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekends");
} else {
  console.log("No tension ");
}

if (12 > 11) {
  const str = "12 is bigger";
  console.log(str);
}

const name = "Ayan";
console.log(`I'm ${name} here.`);
*/

/*
const age = 22;
age >= 18 ? console.log("can drive") : console.log("cann't drive");

const drive = age >= 18 ? "can drive" : "cann't drive";
console.log(drive);

console.log(`Ayan ${age >= 18 ? "can drive" : "cann't drive"}`);
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, and the tip was ${tip}, and the total value ${bill + tip}`,
);

/* 
let tip;
 let bill = 275;

if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15;
  console.log(tip);
  console.log(bill);
  bill = tip + bill;
  console.log(bill);
} else {
  tip = bill * 0.2;
  console.log(tip);
  console.log(bill);
  bill = tip + bill;
  console.log(bill);
}
*/
