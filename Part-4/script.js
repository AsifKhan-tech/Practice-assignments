"use strict";

/*
  const developers = ["Ayan", "Altmash", "Azlan", "Hamza", "Hassan"];
console.log(developers);

const years = new Array(1990, 1991, 1992, 1995, 2026);
console.log(years);

console.log(developers[0], developers[1]);
console.log(years.length);
console.log(developers[developers.length - 1]);

developers[2] = "Hamdan";
console.log(developers);

const calcAge = (birtgYear) => 2026 - birtgYear;
console.log(calcAge(1994));



const developers = ["Ayan", "Altmash", "Azlan", "Hamza", "Hassan"];
console.log("Before push: ", developers);

developers.push("Asif");
console.log("After push: ", developers);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(bills, tip, totals);



const ayan = {
  firstName: "Ayan",
  lastName: "Khan",
  birthYear: 2012,
  job: "student",
  firiends: ["Kantar", "Latoori", "Shoaib"],
  hasDriversLicense: false,

  // calcAge: function (birtYear) {
  //   return 2026 - birtYear;
  // },

  // calcAge: function () {
  //   return 2026 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this?.firstName} is a ${this?.calcAge()}-years old ${this?.job} and he has ${this.hasDriversLicense ? "a" : "no"} driving license.`;
  },
};

//console.log(ayan.calcAge(2014));
//         function(2014)
//console.log(ayan["calcAge"](2014));
//         function(2014)

console.log(ayan.calcAge());
console.log(ayan.age);
console.log(ayan.age);
console.log(ayan.age);

console.log(ayan.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`,
  );
}


console.log("Lifting weights repetiton 1");
console.log("Lifting weights repetiton 2");
console.log("Lifting weights repetiton 3");
console.log("Lifting weights repetiton 4");
console.log("Lifting weights repetiton 5");
console.log("Lifting weights repetiton 6");
console.log("Lifting weights repetiton 7");
console.log("Lifting weights repetiton 8");
console.log("Lifting weights repetiton 9");
console.log("Lifting weights repetiton 10");

console.log("------------------------------------------");

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetiton " + rep);
}
 

const array = [
  "Ayan",
  "Altmash",
  "Azlan",
  112,
  1234,
  "Hamza",
  "Hassan",
  ["Arif, Asif, Qasim"],
];

const types = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);

  // types[i] = typeof array[i];
  types.push(typeof array[i]);
}

console.log(types);

const years = [1990, 1991, 1992, 1995, 2026];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2026 - years[i]);
}

console.log(ages);

console.log("--------------Strings-------------");

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "string") continue;

  console.log(array[i], typeof array[i]);
}

console.log("--Break when number encounter--");

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") break;

  console.log(array[i], typeof array[i]);
}


const array = [
  "Ayan",
  "Altmash",
  "Azlan",
  112,
  1234,
  "Hamza",
  "Hassan",
  ["Arif, Asif, Qasim"],
];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(i, array[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log("-----Starting Exercise----", exercise);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight exercise ${rep}`);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`Rolles dice: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop about to end...");
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvg = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

// console.log(calcAvg([1, 2, 3]));
console.log(calcAvg(totals));
console.log(calcAvg(tips));
