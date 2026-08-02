// EASY LEVEL

// Question 1
// Create an array of 5 animal names.
// Print the array.
let animals = ["Dog", "Cat", "Crocodile", "Fox", "Bear"];
console.log(animals);

// Question 2
// Create an array of 5 numbers.
// Print the first and last number.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0], numbers[numbers.length - 1]);

// Question 3
// Print every item inside this array.

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Question 4
// Change "Dog" into "Cat".

let animals = ["Dog", "Bird", "Fish"];
animals[0] = "Cat";

// Question 5
// Add a new color into the array.

let colors = ["Red", "Blue"];
colors.push("Black");

console.log(colors);

// Question 6
// Remove the last item from the array.

let foods = ["Rice", "Chicken", "Soup"];
foods.pop();
console.log(foods);

// MEDIUM LEVEL

// Question 7
// Use a loop to print all students.

let students = ["Ali", "John", "Sarah"];
for (i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// Question 8
// Use a loop to calculate total marks.

let marks = [80, 70, 90];
let sum = 0;
for (i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
console.log(sum);

// Question 9
// Count how many numbers are greater than 50.
let count = 0;
let numbers = [20, 80, 40, 90];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    count++;
  }
}
console.log(count);

// Question 10
// Add a new subject and print all subjects.

let subjects = ["Math", "English"];
subjects.push("Geography");
console.log(subjects);

// Question 11
// Remove the last product from the list.

let products = ["Laptop", "Phone", "Tablet"];
products.pop();

// Question 12
// Print only even numbers.

let numbers = [1, 2, 3, 4, 5, 6];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2) {
    continue;
  } else console.log(numbers[i]);
}

// HARD LEVEL

// Question 13
// Find the total price.

let prices = [100, 200, 300];
let sum = 0;
for (i = 0; i < prices.length; i++) {
  sum += prices;
}
console.log(sum);

// Question 14
// Find the average score.
let sum = 0;
let scores = [80, 90, 70, 100];
for (score of scores) {
  sum += score;
}
let average = sum / scores.length;

console.log(average);

// Question 15
// Count how many students passed.
// Passing mark is 60.
let count = 0;
let scores = [50, 80, 40, 90, 70];
for (score of scores) {
  if (score >= 60) {
    count++;
  }
}
console.log(count);

// Question 16
// Find the smallest number.

let numbers = [50, 20, 80, 10, 40];
let smallest = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log(smallest);
// Question 17
// Create a shopping cart.
// Add 3 items.
// Remove 1 item.
// Print the final cart.
let shoppingItems = ["Coke", "CocaCola", "Cola"];
shoppingItems.pop();
console.log(shoppingItems);
// Question 18
// Ask the user for 5 numbers.
// Store them inside an array.
// Print all numbers.

// Question 19
// Find how many times "Apple" appears.

let fruits = ["Apple", "Banana", "Apple", "Orange", "Apple"];

// Question 20
// Create a student score system.
// Store 5 scores.
// Print:
// - all scores
// - total score
// - average score
// - number of students who passed
