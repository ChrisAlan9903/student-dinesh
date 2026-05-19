// LESSON 1 - VARIABLE
// 1. Think of variable as a box that holds data/value.
// 2. Can also think of it as the a, b, or c in a algebra equation.
// 3. Variables in JS can hold many Types of Data.
// 4. Variables in JS is not type-strict. (Dont need to declare the type of variable)

// ---- CREATE/DECLARE a variable -------
const nameOfVariable2 = 123;
let nameOfVariable3 = "Hello";
let nameOfVariable1;
var nameOfVariable4 = [1, 2, "Hello"]; //not recommended to use var anymore

// ------ DATA TYPES ---------------
let string = "text !@#$";
let number = 2.0;
let boolean = false;

let array = [1, 2, "text"];
let object = {
  name: "Dinesh",
  age: 12,
  hobbies: ["football", "swimming", "dating"],
};

console.log("age: ", object.age);
