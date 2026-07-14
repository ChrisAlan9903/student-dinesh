// javascript_practice_day3.js
// Topic: Loops
// Instructions:
// 1. Solve every question
// 2. Run your code
// 3. Do not search for answers
// 4. If stuck, write your thought process in comments

// -----------------------------
// SECTION 1: BASIC FOR LOOPS
// -----------------------------

// Q1:
// Print numbers 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Q2:
// Print numbers 5 to 1 using a for loop
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Q3:
// Print all even numbers from 2 to 10
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}
// Q4:
// Print all odd numbers from 1 to 9
for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// Q5 (Tricky):
// What will be printed?
for (let i = 0; i < 3; i++) {
  console.log(i);
} // 0 1 2

// Write your answer in a comment

// -----------------------------
// SECTION 2: WHILE LOOPS
// -----------------------------

// Q6:
// Use a while loop to print:
// 1
// 2
// 3
// 4
// 5
let number = 1;

while (number < 6) {
  console.log(number++);
}

// Q7:
// Start with energy = 100
// Print energy
// Reduce energy by 25 each loop
// Stop when energy reaches 0
let energy = 100;

while (energy >= 0) {
  console.log(energy);
  energy -= 25;
}
// Q8 (Tricky):
// What happens here?

// let count = 1;
// while (count > 0) {
//   console.log(count);
// } //created an infinite "1" loop as the

// Explain in a comment

// -----------------------------
// SECTION 3: ARRAYS + LOOPS
// -----------------------------

const fruits = ["Apple", "Orange", "Banana"];

// Q9:
// Use a for loop to print every fruit
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// // Q10:
// // Use a for...of loop to print every fruit
for (fruit of fruits) {
  console.log(fruit);
}

// Q11:
// Print only "Orange"
for (fruit of fruits) {
  if (fruit === "Orange") {
    console.log(fruit);
  }
}

// Q12:
// Print the first fruit
console.log(fruits[0]);

// Q13:
// Print the last fruit
console.log(fruits[2]);

// -----------------------------
// SECTION 4: BREAK & CONTINUE
// -----------------------------

// Q14:
// Print numbers 1 to 10
// Stop completely when the number reaches 5
for (i = 1; i < 11; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}

// Q15:
// Print numbers 1 to 10
// Skip number 5
for (i = 1; i < 11; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
// Q16 (Tricky):
// What is the output?

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
} // 1 2 4 5

// Write your answer in a comment

// -----------------------------
// SECTION 5: FOR...IN
// -----------------------------

const student = {
  name: "Dinesh",
  age: 20,
  course: "IT",
};

// Q17:
// Use for...in to print all keys
for (key in student) {
  console.log(key);
}
// Q18:
// Use for...in to print all values
for (key in student) {
  console.log(student[key]);
}
// Q19:
// Print:
// name : Alan
// age : 20
// course : IT

for (key in student) {
  console.log(key + " : " + student[key]);
}

// -----------------------------
// SECTION 6: MINI CHALLENGES
// -----------------------------

// Q20:
// Create an array of 5 numbers
// Use a loop to calculate the total sum
// Example:
// [10, 20, 30]
// Result: 60
let arrays = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arrays.length; i++) {
  sum += arrays[i];
}
console.log(sum);
// Q21:
// Count how many fruits are in the fruits array
// Print the count
console.log("Q21: " + fruits.length);

// Q22:
// Print every character in the word:
// "JAVASCRIPT"
let jsScript = "JAVASCRIPT";
for (i = 0; i < jsScript.length; i++) {
  console.log(jsScript[i]);
}

// Q23 (Tricky):
// Predict the output before running

for (let i = 10; i > 0; i -= 3) {
  console.log(i);

  // Write your prediction in a comment
} //10, 7, 4, 1

// Q24 (Challenge):
// Print this pattern
// *
// **
// ***
// ****
// *****
let star = "";
for (i = 0; i < 5; i++) {
  star += "*";
  console.log(star);
}

for (i = 1; i < 5; i++) {
  let space = " ".repeat(5 - i);
  let star = "*".repeat(i * 2 - 1);
  console.log(space + star);
}

console.log("     *    ");
console.log("    ***   ");
console.log("   *****  ");
console.log("  ******* ");
console.log(" *********");
console.log("***********");

// 1. 1st layer always from 1 star
// 2. for every next layer, star increase by 2 from previous layer star count

let numberOfLayer = 6;
let emptySpace = " ";
let currentStarNumber = "*";

let nSpace = numberOfLayer - 1;

for (let index = 1; index <= numberOfLayer; index++) {
  for (let jindex = nSpace; jindex > 0; jindex--) {
    emptySpace = emptySpace + " ";
  }
  nSpace -= 1;

  console.log(emptySpace + currentStarNumber);
  currentStarNumber = currentStarNumber + "**";
  emptySpace = " ";
}

// END OF PRACTICE
