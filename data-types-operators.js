/*
let marks = 82;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else {
  grade = "F";
}
  */
//let dateA = new Date("2026-07-21");
//let dateB = new Date("2026-07-21");
//console.log(dateA === dateB);  false (different object references)
// console.log(dateA, ":", dateB);
//console.log(dateA.getTime(), ":", dateB.getTime()); getTime() method convert time in milliseconds

//console.log(dateA.getTime() === dateB.getTime()); // true (standard practice)
//let day = "Tuesday";
// Bug — "Sunday" alone is always truthy:
//if (day === "Saturday" || "Sunday") {
// console.log("Weekend pricing applied (BUG — wrong on Tuesday!)");
//}

// let savedCart = { items: ["Shirt", "Shoes"], total: 1200 };
// let currentCart = { items: ["Shirt", "Shoes"], total: 1200 };
// if (savedCart === currentCart) {
//   console.log("No changes");
// } else {
//   console.log("Carts differ (by reference)");
// }
// Output: Carts differ (by reference) — even though data looks the same!
// Standard practice — compare contents, not references:
// if (JSON.stringify(savedCart) === JSON.stringify(currentCart)) {
//   console.log("No changes (content match)");
// } else {
//   console.log("Cart contents differ");
// }
// Output: No changes (content match)

//When there is need to store multiple values in a single variable, we can use objects. Objects are collections of key-value pairs, where each key is a string (or symbol) and the value can be any data type, including other objects or functions.

// const user = {
//   firstName: "Alex",
//   age: 28,
//   isAdmin: true,
//   greet: function () {
//     return `Hello, my name is ${this.firstName}`;
//   },
// };

//console.log(user.firstName); // Output: Alex
//console.log(user.greet()); // Output: Hello, my name is Alex

/*const fruits = ["apple", "banana"];
const newLength = fruits.push("orange", "grape");
console.log(newLength);
console.log(fruits); 

let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit); 

let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers);
console.log(newLength);


let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors);
console.log(firstColor);


let str = "hello";
let charArray = str.split("");
console.log(charArray);


let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray);


let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString);
*/

// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let removed = fruits.splice(2, 2);

// console.log(fruits); // ["apple", "banana", "kiwi"]
// console.log(removed); // ["orange", "mango"]

// let colors = ["red", "green", "blue"];
// colors.splice(1, 0, "yellow", "purple");

// console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 2, 6, 7, 8);
// numbers.splice(0);
// console.log(numbers);

// let original = [1, 2, 3, 4, 5];
// let copy = [...original];
// copy.splice(2, 1, 6);

// console.log(original);
// console.log(copy);

let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
  fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]

const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(30, 4)); // true

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray); // [1, 2, 3, 4]
