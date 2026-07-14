// javascript_practice_day4.js
// Topic: Loop Practice
// Instructions:
// 1. Solve every question
// 2. Run your code
// 3. Do not search for answers
// 4. If stuck, write your thought process in comments

// -----------------------------
// SECTION 1: COUNTING LOOPS
// -----------------------------

// Q1:
// Print numbers 1 to 20

// Your code here
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Q2:
// Print only numbers divisible by 3 from 1 to 20
//
// Expected Output:
// 3
// 6
// 9
// 12
// 15
// 18

// Your code here
for (let i = 3; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Q3:
// Find the sum of numbers from 1 to 10
//
// Expected Output:
// 55

// Your code here
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
// Q4:
// Count how many even numbers exist between 1 and 20
//
// Expected Output:
// 10
let sum = 0;
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum += 1;
  }
}
console.log(sum);
// Your code here

// -----------------------------
// SECTION 2: ARRAYS + LOOPS
// -----------------------------

// Q5:
// Find the largest number in this array
//
// Expected Output:
// 20

const numbers = [5, 12, 3, 20, 8];
let largest = numbers[0];
// Your code here
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);
// Q6:
// Count how many times "Apple" appears
//
// Expected Output:
// 3

const fruits = ["Apple", "Orange", "Apple", "Banana", "Apple"];
let count = 0;
// Your code here
for (i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    count++;
  }
}
console.log(count);
// Q7:
// Print the array in reverse order
//
// Expected Output:
// Banana
// Orange
// Apple

const fruits2 = ["Apple", "Orange", "Banana"];

// Your code here

// -----------------------------
// SECTION 3: PATTERN PRACTICE
// -----------------------------

// Q8:
// Print this pattern:
//
// *
// **
// ***
// ****
// *****
// ******

// Your code here

// Q9:
// Print this pattern:
//
// ******
// *****
// ****
// ***
// **
// *

// Your code here

// Q10:
// Print this pattern:
//
// 1
// 12
// 123
// 1234
// 12345

// Your code here

// -----------------------------
// SECTION 4: CHALLENGES
// -----------------------------

// Q11:
// Find the average of the numbers below
//
// Expected Output:
// 80

const scores = [80, 90, 70, 100, 60];

// Your code here

// Q12:
// Count how many vowels are in:
//
// "JAVASCRIPT"
//
// Expected Output:
// 3
//
// (A, A, I)

const word = "JAVASCRIPT";

// Your code here

// Q13:
// Find the longest word
//
// Expected Output:
// elephant

const words = ["cat", "elephant", "dog", "giraffe"];

// Your code here

// -----------------------------
// BONUS (OPTIONAL)
// -----------------------------

// Q14:
// Print this pattern:
//
// 1
// 22
// 333
// 4444
// 55555

// Your code here

// Q15:
// Find the smallest number in this array
//
// Expected Output:
// 3

const values = [15, 8, 22, 3, 17];

// Your code here

// END OF PRACTICE
