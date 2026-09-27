const userId = Symbol("id");

const user = {
  name: "Ayan",
  [userId]: 123, // Symbol-keyed property
};

// Accessing the property requires the symbol reference
// console.log(user[userId]); //123

for (let key in user) {
  // console.log(key); // prints: "name" (userId is skipped)
}

// console.log(JSON.stringify(user));

// Create a new global symbol
const globalSym1 = Symbol.for("app.config");

// Retrieve the existing symbol
const globalSym2 = Symbol.for("app.config");

// console.log(globalSym1 === globalSym2); // trues

// High Order function
/**
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
 *
 * The scope is the current context of execution in which values and expressions are "visible" or can be referenced.
 *
 * A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.
 *
 * In JavaScript, a higher-order function is a function that either takes one or more functions as arguments / parameter, returns a function as its result, or both
 */

function myFunction(paraFunc) {
  return paraFunc() + 7;
}

function highOrderFn() {
  return 3;
}

// console.log(myFunction(highOrderFn));

const fruits = ["apple", "mango", "guava", "orange"];

// forEach((el, idx, fruits) => console.log(el, "---", idx, "-->", fruits));

function forEach(userFn) {
  for (let i = 0; i < fruits.length; i++) {
    userFn(fruits[i], i, fruits);
  }
}

const nums = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (let i = 0; i < nums.length; i++) {
//   result.push(nums[i] * 2);
// }
// console.log(result);
const result = map((e) => e * 5);
// console.log(result);

function map(callback) {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    const currentEle = nums[i];
    const newNum = callback(currentEle);
    newArr.push(newNum);
  }
  return newArr;
}

// function callback(e) {
//   return e * 2;
// }

const newNums = [1, 2, 3];

function filter(callback) {
  const result = [];
  for (let i = 0; i < newNums.length; i++) {
    // const currEle = newNums[i];
    const value = callback(newNums[i]);
    if (value) result.push(value);
    // const newNum = callback(currEle);
    // if (newNum) result.push(newNum);
  }
  return result;
}

function filterKaCallback(e) {
  if (e % 2 === 0) {
    return e;
  }
}

const filterResult = filter(filterKaCallback);
// console.log(filterResult);

// const filterResult = newNums.filter((e) => e % 2 === 0);
// console.log(filterResult);

/**
 *Loop chalega ✓
 *Initial value deni hogi ✓
 *Har element pe callback execute hoga ✓
 *Har step ka return value store hoga ✓
 *Wo stored value agle step mein di jayegi ✓
 */

function reduce(cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < newNums.length; i++) {
    acc = cb(acc, newNums[i]);
  }
  return acc;
}

function sumCallback(acc, curr) {
  return acc + curr;
}

const resultReduce = reduce(sumCallback, 0);
console.log(resultReduce);
