/**
 * 
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}



const iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
    }
    // 11
    // 21
    // 31

    
    const numbers = [1, 2, 3, 4, 5];
    for (const num of numbers) {
      num += 1; // This will cause an error
      console.log(num);
    }
    const fruit = {
      name: "apple",
      color: "red",
      price: 0.99,
    };
    
    for (const prop in fruit) {
      //   console.log(prop); it will print key 
      console.log(fruit[prop]); //This will print values
    }
    const person = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
      },
    };
    
    for (const prop in person) {
      console.log(person[prop]);
    }
    const person = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
      },
    };
    
    function isObject(obj) {
      return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
    }
    
    for (const prop in person) {
      if (isObject(person[prop])) {
        for (const nestedProp in person[prop]) {
          console.log(person[prop][nestedProp]);
        }
      } else {
        console.log(person[prop]);
      }
    }
    let counter = 0;
    while (counter < 5) {
      console.log(counter);
      counter++;
    }
    
    let counter = 0;
    do {
      console.log(counter);
      counter++;
    } while (counter < 5);
    
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break;
      }
      console.log(i);
    }
    
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue;
      }
      console.log(i);
    }
    */

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
