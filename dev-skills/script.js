"use strict";

// PROBLEM 1:
//* We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//? 1) Understanding the problem
//What's temprature amplitude?
//Answer: Difference between highest & lowest temprature in the array
//How to calculate max & min tempratures?
//What's a sensor error? And what to do

//? 2) Breaking up into sub-problems
//How to ignore errors?
//Find max value in temprature value in array
//Find min value in temprature value in array
//subtract min from max it's(amplitude) and then return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    //* if (temps[i] > max) max = temps[i];
    //* if (temps[i] < min) min = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log("Max: ", max);
  console.log("Min: ", min);

  return max - min;
};

/**
const amplitude = calcTempAmplitude(temperatures);
 console.log(amplitude);
 */

//Problem:2
//* Function should now recieve 2 arrays of tempratures

//* 1) Understanding the problem
//- with 2 arrays, should be implement same functionality twice? NO! just merge 2 arrays at the begining

//* 2) Breaking up into sub-problems
//  merge 2 arrays

/**
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log("Temps: ", temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    //* if (temps[i] > max) max = temps[i];
    //* if (temps[i] < min) min = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log("Max: ", max);
  console.log("Min: ", min);

  return max - min;
};

 const amplitudeNew = calcTempAmplitudeNew([2, 5, 7], [1, 8, 0]);
 console.log("Amplitude: ", amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "Clesius",

    // C) FIX
    value: Number(prompt("Degrees celsius:")),
  };

  // B) FIND
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};

// A) IDENTIFY
// console.log(measureKelvin());

//? Using debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log("Temps: ", temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    //* if (temps[i] > max) max = temps[i];
    //* if (temps[i] < min) min = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log("Max: ", max);
  console.log("Min: ", min);

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([2, 5, 7], [1, 8, 10]);

// A) IDENTIFY
console.log("Amplitude:", amplitudeBug);

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//? 1) Understanding the problem
//- Array transform to string, seperated by ...dots
//- What is the X days? Answer: index+1
//? 2) Breaking up into sub-problems
//- Transfor array into a string
//- Transform each element to string with ºC
//- String need to contain day (index+1)
//- Add ... between elements and start and end of string

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

console.log(
  `... ${testData1[0]}ºC ... ${testData1[1]}ºC ... ${testData1[2]}ºC ...`,
);

const printForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};

printForcast(testData1);
