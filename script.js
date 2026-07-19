const price = 250;
//const quantity = "3";
const quantity = Number("3");
/* 
When add both variables, type coercion is happening here.
- Type coercion - Automatically converts the data type 
- 250 - is converting into string: "253
- In (+) case JS convert a non-string value into string then concatenate
- Output: 253
*/

// console.log(price + quantity, typeof (price + quantity));

let balance = 1000;
let withdrawal = "500";
/* 
- "500" is coverted into 500
- Output: 500
*/

// console.log(balance - withdrawal, typeof (balance - withdrawal));

/* 
- Number data type does not store leading zeros (they have no mathematical value). Phone
numbers should be stored as Strings
*/

let date = Date();
//console.log(typeof date); string
let newDate = new Date();
/*
 console.log(typeof newDate); object
 console.log(newDate.getUTCMilliseconds());
 */

/* - Date: Sun Jul 19 2026 16:45:13 GMT+0530 (India Standard Time)
-new Date: Sun Jul 19 2026 16:46:16 GMT+0530 (India Standard Time)
           Day 
              Month
                   Date
                       Year
                          Time with minutes and seconds
                                    GMT something
                                                IST
          */

let stock = "50";
let sold = 20;
let remaining = stock - sold;
/* -convert stock string in number because of(-) operator 
   - then perform arithmetic operation
*/

// console.log(remaining + " units left");
/*remaining: It's number gets coercion because of (+) operator
- Output: 30 units left (is a string)
*/

let recieveAmount = "1,250.50";

let cleanOutput = recieveAmount.replace(",", "");
/* -                           replace("what", "with"): is a string method to replace a part of the string. */

// console.log(Number(cleanOutput));

let baseFare = 50;
let distance = undefined;
let fare = baseFare + distance;
// console.log(fare);

let age = "25years";
let ageInNumber = parseInt(age);
// console.log(ageInNumber);

let likes = 10;
likes = likes + 1;
likes = likes + "1";
// console.log(likes, typeof likes);
