// Question 1
// Print every fruit using a for loop.

let fruits = ["Apple", "Banana", "Orange"];
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Question 2
// Print every number using a for loop.

let numbers = [10, 20, 30, 40];
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Question 3
// Print every student name using a for...of loop.

let students = ["Ali", "John", "Sarah"];
for (student of students) {
  console.log(student);
}

// Question 4
// Print every color using a for...of loop.

let colors = ["Red", "Blue", "Green"];
for (color of colors) {
  console.log(color);
}

// Question 5
// Print all scores using a for loop.

let scores = [80, 90, 70];
for (score of scores) {
  console.log(score);
}

// Question 6
// Calculate the total score using a loop.

let scores = [80, 90, 70];
let sum = 0;
for (i = 0; i < scores.length; i++) {
  let count = scores[i];
  sum += count;
}
console.log(sum);

// Question 7
// Count how many fruits are inside the array using a loop.
let count = 0;
let fruits = ["Apple", "Banana", "Orange", "Mango"];
for (i = 0; i < fruits.length + 1; i++) {
  count = i;
}
console.log(count);
// Question 8
// Print only numbers bigger than 50.

let numbers = [20, 70, 40, 90, 30];
for (number of numbers) {
  if (number >= 50) {
    console.log(number);
  } else continue;
}

// Question 9
// Count how many students passed.
// Passing score is 50.

let scores = [40, 70, 80, 30, 90];
for (score of scores) {
  if (score >= 50) {
    console.log(score);
  } else continue;
}

// Question 10
// Find the biggest number inside the array.

let numbers = [10, 50, 20, 90, 30];
let biggest = numbers[0];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
}

console.log(biggest);
