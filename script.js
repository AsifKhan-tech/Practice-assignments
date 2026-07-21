"use strict";

/*
const price = 250;
const quantity = "3";
const quantity = Number("3");

When add both variables, type coercion is happening here.
- Type coercion - Automatically converts the data type 
- 250 - is converting into string: "253
- In (+) case JS convert a non-string value into string then concatenate
- Output: 253


 console.log(price + quantity, typeof (price + quantity));

let balance = 1000;
let withdrawal = "500";

- "500" is coverted into 500
- Output: 500


console.log(balance - withdrawal, typeof (balance - withdrawal));


- Number data type does not store leading zeros (they have no mathematical value). Phone
numbers should be stored as Strings


let date = Date();
console.log(typeof date); string
let newDate = new Date();

 console.log(typeof newDate); object
 console.log(newDate.getUTCMilliseconds());


 - Date: Sun Jul 19 2026 16:45:13 GMT+0530 (India Standard Time)
-new Date: Sun Jul 19 2026 16:46:16 GMT+0530 (India Standard Time)
           Day 
              Month
                   Date
                       Year
                          Time with minutes and seconds
                                    GMT something
                                                IST
          

let stock = "50";
let sold = 20;
let remaining = stock - sold;
 -convert stock string in number because of(-) operator 
   - then perform arithmetic operation


 console.log(remaining + " units left");
remaining: It's number gets coercion because of (+) operator
- Output: 30 units left (is a string)


let recieveAmount = "1,250.50";

let cleanOutput = recieveAmount.replace(",", "");
 -                           replace("what", "with"): is a string method to replace a part of the string. 

console.log(Number(cleanOutput));

let baseFare = 50;
let distance = undefined;
let fare = baseFare + distance;
console.log(fare);

let age = "25years";
let ageInNumber = parseInt(age);
console.log(ageInNumber);

let likes = 10;
likes = likes + 1;
likes = likes + "1";
console.log(likes, typeof likes);

*/

/*
const fristName = "Ayan";
const birthYear = 2015;
const currentYear = 2026;
const job = "teacher";

const ayan =
  "I'm " +
  fristName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  ".";
console.log(ayan);

const ayanNew = `I'm ${fristName}, a ${currentYear - birthYear} years old ${job}.`;
console.log(ayanNew);

let ageAyan = currentYear - birthYear;

if (ageAyan >= 18) {
  console.log(`Ayan can start drive`);
} else {
  const yearsLeft = 18 - ageAyan;
  console.log(`Ayan is too young. Wait another ${yearsLeft} years :)`);
}

const ayanBirthYear = 2015;
let century;
if (ayanBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`,
  );
} else {
  console.log(`Mark's BMI (${BMIMark}) is less than John's BMI (${BMIJohn}).`);
}
*/
//Type coversion
// const inputYear = "1996";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

//Type coercion
// console.log("I am " + 20 + " years old");

// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("25" * "2");
// console.log("25" / "5");

//let n = "1" + 1; 11 - as string
//n = n - 1; 10 - as number
// console.log(n);

/* 
Falsy values
false, undefined, null, NaN, 0, -0, 0n, ""
*/

/*
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean("non-empty string"));

const money = 1000;
if (money) {
  console.log("Don't spend it at all :)");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
/*

const age = "18";

if (age === 18) console.log("Person is adult! (strict equal)");
if (age == 18) console.log("Person is adult! (loose equal)");

const favrioteNumber = Number(prompt("What's your number!"));
console.log(typeof favrioteNumber, favrioteNumber);

if (favrioteNumber === 12) {
  console.log(`${favrioteNumber} is an amazing number`);
} else if (favrioteNumber === 1) {
  console.log(`${favrioteNumber} is an amazing number`);
} else {
  console.log("Guessed wrong number");
}

if (favrioteNumber !== 12) {
  console.log(`Why 12 is not fav`);
}
*/

/*
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples); //8
  const orangePieces = cutPieces(oranges); //12

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3)); //juice ki string
*/
