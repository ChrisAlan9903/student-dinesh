// Lesson 13: Array
// a. What it is, how to create
// b. How to access the data
// c. How to modify the data
// d. How to add/remove data

// Array is a data that can store multiple data (group)
let student1 = "Dinesh";
let student2 = "Chris";
let student3 = "Emily";

// with array:
let students = ["Dinesh", "Chris", "Emily"];
console.log(students);

// some example of array
let names = ["Ali", "John", "Sarah"]; // string array
let scores = [80, 90, 70]; // number array
let results = [true, false, true]; // boolean array
let data = ["Ali", 15, true]; // mixed array

let objects = [
  { name: "Toyota", model: "Vios" },
  { name: "Toyota", model: "Vios" },
  { name: "Toyota", model: "Vios" },
];

let arrays = [
  [80, 90, 70],
  [true, false, true],
  ["Ali", 15, true],
  { name: "Toyota", model: "Vios" },
  "Hello",
  [
    [80, 90, 70],
    [true, false, true],
    ["Ali", 15, true],
  ],
];

// Note: each item inside array is called Element
// Note 2: while u can, it is not encouraged to put mixed type data in an array

// Lesson 13.b: Accessing data in array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let fruit = fruits[2];
console.log(fruit);

// Lesson 13c: How to modify
let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Watermelon";
console.log(fruits);

// Lesson 13d: How to add/remove element in array

// ADD
let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Watermelon");
console.log(fruits);

// REMOVE
fruits.pop();

console.log(fruits);
console.log(removed);
console.log(fruits.pop());

// Extra note: use .shift() and unshift() to add or remove from the beginning of array

// Practice with loop
// Given an array of names, print out each item in the array using for loop
let students = ["Dinesh", "Chris", "Emily"];

// for (let index = 0; index < students.length; index++) {
//   console.log(students[index]);
// }

// using for of loop

for (let element of students) {
  console.log(element);
}

// using map()

students.map((element) => {
  console.log(element);
});

students.map(function (element) {
  console.log(element);
});
