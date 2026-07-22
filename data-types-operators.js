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
let dateA = new Date("2026-07-21");
let dateB = new Date("2026-07-21");
//console.log(dateA === dateB);  false (different object references)
// console.log(dateA, ":", dateB);
//console.log(dateA.getTime(), ":", dateB.getTime()); getTime() method convert time in milliseconds

//console.log(dateA.getTime() === dateB.getTime()); // true (standard practice)
let day = "Tuesday";
// Bug — "Sunday" alone is always truthy:
if (day === "Saturday" || "Sunday") {
  // console.log("Weekend pricing applied (BUG — wrong on Tuesday!)");
}

let savedCart = { items: ["Shirt", "Shoes"], total: 1200 };
let currentCart = { items: ["Shirt", "Shoes"], total: 1200 };
if (savedCart === currentCart) {
  console.log("No changes");
} else {
  console.log("Carts differ (by reference)");
}
// Output: Carts differ (by reference) — even though data looks the same!
// Standard practice — compare contents, not references:
if (JSON.stringify(savedCart) === JSON.stringify(currentCart)) {
  console.log("No changes (content match)");
} else {
  console.log("Cart contents differ");
}
// Output: No changes (content match)
