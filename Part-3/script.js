"use strict";

/*
function calculatePrice(age, isWeekend) {
  if (age < 0 || typeof age !== "number" || isNaN(age)) return -1;

  let price;
  if (age >= 0 && age <= 12) {
    price = 8;
  } else if (age > 12 && age <= 17) {
    price = 12;
  } else if (age > 17 && age < 59) {
    price = 15;
  } else {
    price = 10;
  }

  const weekendPrice = isWeekend === true ? (price += 3) : price;
  console.log(weekendPrice);

  if (isWeekend === true) {
    price += 3;
    console.log(price);
  } else {
    console.log(price);
  }
}
calculatePrice(14, true);



let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive: D");

 const interface = "video";
 const private = true;


function logger() {
  console.log("My name is Ayan");
}

//calling or running or invoking function
// logger();

/*
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);

const applesOrangesJuice = fruitProcessor(3, 5);
console.log(applesOrangesJuice);

const num = Number("1");
console.log(num);


function declaration or named function
function declarations can called before they defined in the code. Can call before they defined

 const before = calcAge1(2015);
 console.log("Ayan is", before, "years old.");
function calcAge1(birthYear) {
  return 2026 - birthYear;
}

 const ageAyan = calcAge1(2011);
 console.log("Ayan is", ageAyan, "years old.");

Anonymous function or function expression or it can be named as well. Cann't call before they defined
const calcAge2 = function (birtYear) {
  return 2026 - birtYear;
};
 const ageAltamash = calcAge2(2005);
 console.log("Altamash is", ageAltamash, "years old.");


function (birtYear) {
  return 2026 - birtYear;
}; It's the expression and produces a vlue


Arrow function
const calcAge3 = (birtYear) => 2026 - birtYear;

const ageAzlan = calcAge3(2020);
console.log("Azlan is", ageAzlan, "years old.");

const yearsUntilRetirement = (birtYear, firstName) => {
  const age = 2026 - birtYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years.`;
};

const retirementYears = yearsUntilRetirement(1980, "Jacob");
console.log(retirementYears);
*/

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
