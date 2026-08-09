const person = {
  name: "Ayan",
  age: 15,
  city: "Delhi",
};

console.log(person.name);
console.log(person.age);

console.log(person["name"]);
console.log(person["age"]);

const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World",
};

console.log(oddObject["1stProperty"]); // Hello
console.log(oddObject["property with spaces"]); // World

const person1 = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};

let propertyName = "city";
console.log(person1[propertyName]); // Wonderland

const person2 = {
  name: "Alice",
  age: 30,
  job: "Engineer",
};

delete person2.job;

console.log(person2.job); // undefined

const person3 = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York",
};

const { job, city, ...remainingProperties } = person3;
console.log("New obj:", person3);

// { name: "Bob", age: 25 }
console.log("Rem props", remainingProperties);

let obj = { a: 1, b: 2, c: 3 };
delete obj.b;
console.log(obj);

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

delete car.year;
console.log(car.year);

const person4 = {
  name: "Alice",
  age: 30,
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false

const person5 = {
  name: "Alice",
  age: 30,
};

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job")); // false

const user = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null,
};

// Object.hasOwn() correctly reports these all exist
console.log(Object.hasOwn(user, "score")); // true  (value is 0, but property exists)
console.log(Object.hasOwn(user, "isActive")); // true  (value is false, but property exists)
console.log(Object.hasOwn(user, "nickname")); // true  (value is null, but property exists)
console.log(Object.hasOwn(user, "email")); // false (property was never added)

// Danger! Using if() directly gives wrong results for falsy values
if (user.score) {
  console.log("Has score"); // This will NOT print even though score exists!
}

// Safe! Object.hasOwn() gives correct result
if (Object.hasOwn(user, "score")) {
  console.log("Has score:", user.score); // Has score: 0
}

const person6 = {
  name: "Bob",
  age: 25,
};
console.log("name" in person); // true

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };

// console.log(car.brand !== undefined); // true
// console.log(car.color !== undefined); // false

const person7 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

console.log(person7.contact.phone.work);
console.log(person7["contact"]["phone"]["work"]);

const person8 = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" },
  ],
};
console.log(person8.addresses[1].city);

const num = 42;
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj);
console.log(typeof numObj); // "object"

const newObj = new Object(undefined);
console.log(newObj); // {}

function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));
