// ========================================
// JavaScript Exercises: Variables and Data Types
// ========================================

// Exercise 1: Create Basic Variables
// Create variables for name, age, and isStudent.
// Use the correct data type for each variable.

// Your code here:
const name = "Dinesh";
const age = "20";
const isStudent = true;

// ========================================

// Exercise 2: Use let and const
// Create two variables:
// schoolName should not change.
// favoriteSubject can change.
// Decide which one should use let and which one should use const.

// Your code here:
const schoolName = "Asia Pacific University";
let favoritesubject = "RWDD";

// ========================================

// Exercise 3: Change a Variable Value
// Create this variable:
// let mood = "happy";
// Then change the value to "excited".
// Print both values using console.log.

// Your code here:
let mood = "happy";
console.log("mood:", mood);

mood = "excited";
console.log("mood:", mood);

// ========================================

// Exercise 4: Check Data Types
// Create these variables:
// let username = "John";
// let score = 100;
// let isOnline = false;
// let emptyValue = null;
// let unknownValue;
// Use typeof to check each data type.

// Your code here:
let username = "John";
let score = 100;
let isOnline = false;
let emptyValue = null;
let unknownValue;


// ========================================

// Exercise 5: Fix the Wrong Data Types
// The variables below have wrong data types.
// Change them to more suitable data types.

// Wrong examples:
// let age = "15";
// let isLoggedIn = "true";
// let username = 12345;

// Expected:
// age should be a number
// isLoggedIn should be a boolean
// username should be a string

// Your code here:
let age = 15;
let isLoggedIn = true;
let username = "12345";

// ========================================

// Exercise 6: Create a Student Profile
// Create variables for one student:
// studentName
// studentAge
// studentClass
// isPresent
// Store suitable values and print them using console.log.

// Example output:
// Name: Ali
// Age: 14
// Class: 2A
// Present: true

// Your code here:
let student = {
  studentName: "Ali",
  studentAge: 14,
  studentClass: "2A",
  isPresent: true,
};

console.log("Name: " + student.studentName);
console.log("Age: " + student.studentAge);
console.log("Class: " + student.studentClass);
console.log("Present: " + student.isPresent);

// ========================================

// Exercise 7: String or Number?
// Create these variables:
// let phoneNumber = "0123456789";
// let numberOfSiblings = 3;
// Add comments explaining why phoneNumber is a string
// and numberOfSiblings is a number.

// Your code here:
let phoneNumber = "0123456789";
// Because the phone number value isnt supposed to change
let numberOfSiblings = 3;
// Because the number of siblings can change

// ========================================

// Exercise 8: Undefined vs Null
// Create these variables:
// let favoriteFood;
// let selectedColor = null;
// Add comments explaining the difference between undefined and null.

// Your code here:
let favoriteFood;
let selectedColor = null;
// undefined means nothing has been defined, null means its undefined on purpose

// ========================================

// Exercise 9: Create Product Variables
// Create variables for a product:
// productName
// productPrice
// isAvailable
// productDescription
// Choose the correct data type for each one.

// Your code here:
const productName = "Chris Coffee"
let productPrice = 6
let isAvailable = true
const productDescription = "Very good coffee fr"

// ========================================

// Exercise 10: Mini Self Introduction
// Create variables about yourself:
// myName
// myAge
// myHobby
// isBeginner
// Use console.log to print a short self-introduction.


// Example output:
// Hi, my name is Ali.
// I am 13 years old.
// My hobby is drawing.
// Beginner in JavaScript: true

// Your code here:
let selfIntroduction = {
    myName = "Dinesh",
    myAge = "20",
    myHobby = "Music",
    isBeginner = true,
}
console.log("Name: " + selfIntroduction.myName)
console.log("Age: " + selfIntroduction.myAge)
console.log("Hobby: " + selfIntroduction.myHobby)
console.log("Beginner: " + selfIntroduction.isBeginner)
// ========================================
// End of Exercises
// ========================================
