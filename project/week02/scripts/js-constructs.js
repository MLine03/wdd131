// ====== Conditional Statements ======

// if / else if / else
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

// switch statement
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek!");
    break;
  case "Friday":
    console.log("End of the week!");
    break;
  default:
    console.log("Another day");
}

// ====== Looping Structures ======

// for loop
console.log("for loop example:");
for (let i = 1; i <= 5; i++) {
  console.log("  Loop count: " + i);
}

// while loop
console.log("while loop example:");
let count = 3;
while (count > 0) {
  console.log("  Countdown: " + count);
  count--;
}

// forEach loop
console.log("forEach loop example:");
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit, index) {
  console.log(`  Fruit ${index + 1}: ${fruit}`);
});
