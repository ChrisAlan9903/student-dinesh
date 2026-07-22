// =========================
// EASY QUESTIONS (10)
// =========================

// Question 1
// Create an object called "student".
// Store:
// - name
// - age
// - school
//
// Then print the student's name.

/*
Example:
name: "Ali"
age: 15
school: "ABC School"
*/
let student = {
  name: "Dinesh",
  age: 20,
  school: "Asia Pacific University",
};
console.log(student.name);

// Question 2
// Create an object called "book".
// Store:
// - title
// - author
// - price
//
// Then print the book title and price.
let book = {
  title: "48 Laws of Power",
  author: "Robert Greene",
  price: 70,
};
console.log(book.title);
console.log(book.price);
// Question 3
// Given the object below:
// Print the car brand and color.

let car = {
  brand: "Toyota",
  model: "Vios",
  color: "Red",
};
console.log(car.brand);
console.log(car.color);
// Question 4
// Given the object below:
// Change the person's age to 30.

let person = {
  name: "John",
  age: 25,
};
person.age = 30;

// Question 5
// Given the object below:
// Change the phone storage to "256GB".

let phone = {
  brand: "Samsung",
  storage: "128GB",
  color: "Black",
};
phone.storage = "256GB";

// Question 6
// Given the object below:
// Add a new property called "price".
// Set the value to 3000.

let laptop = {
  brand: "Lenovo",
  model: "ThinkPad",
};
laptop.price = 3000;

// Question 7
// Given the object below:
// Add a new property called "country".
// Set the value to "Malaysia".

let restaurant = {
  name: "ABC Cafe",
  foodType: "Western",
};
restaurant.country = "Malaysia";

// Question 8
// Given the object below:
// Print the first subject from the subjects array.

let student = {
  name: "Ali",
  subjects: ["Math", "Science", "English"],
};
console.log(student.subjects[0]);

// Question 9
// Given the object below:
// Change the first subject from "Math" to "History".

let student = {
  name: "Ali",
  subjects: ["Math", "Science", "English"],
};

student.subjects[0] = "History";
console.log(student);

// Question 10
// Given the object below:
// Print:
// "I bought a [brand] phone"

let phone = {
  brand: "Apple",
  model: "iPhone 15",
};
console.log(`I bought a ${phone.brand} phone`);

// =========================
// MEDIUM QUESTIONS (5)
// =========================

// Question 11
// Given the object below:
// Create a variable called "totalPrice".
// Store the product price into the variable.
// Then print the variable.

let product = {
  name: "Keyboard",
  price: 150,
  category: "Computer",
};
product.totalPrice = product.price;
console.log(product.totalPrice);

// Question 12
// Given the object below:
// Increase the product price by 50.

let product = {
  name: "Mouse",
  price: 100,
};
product.price = product.price + 50;
console.log(product);

// Question 13
// Given the object below:
// Add a new property called "isAvailable".
// Set the value to true.

let game = {
  title: "Minecraft",
  platform: "PC",
  price: 60,
};
game.isAvailable = true;

// Question 14
// Given the object below:
// Print the student's name.
// Then print all subjects one by one.

let student = {
  name: "Sarah",
  age: 16,
  subjects: ["Math", "Physics", "Chemistry"],
};

console.log(student.name);

let subjectsArray = student.subjects;
for (subject of student.subjects) {
  console.log(subject);
}

// Question 15
// Given the object below:
// Change:
// - movie rating to 9.5
// - movie genre to "Adventure"
// Add:
// - language: "English"

let movie = {
  title: "Avatar",
  genre: "Action",
  rating: 8.5,
};
movie.rating = 9.5;
movie.genre = "Adventure";
movie.language = "English";

// =========================
// HARD QUESTIONS (5)
// =========================

// Question 16
// Create an object called "bankAccount".
// Store:
// - accountName
// - accountNumber
// - balance
//
// Then:
// - Add 500 to the balance
// - Print the final balance
let bankAccount = {
  accountName: "Bubuu",
  accountNumber: "123456789",
  balance: 100000,
};
bankAccount.balance = bankAccount.balance + 500;
console.log("Final Balance: " + bankAccount.balance);

// Question 17
// Given the object below:
// Calculate the total cost.
//
// Formula:
// price * quantity

let order = {
  productName: "Shoes",
  price: 100,
  quantity: 3,
};
order.totalCost = order.price * order.quantity;
console.log(order.totalCost);

// Question 18
// Given the object below:
// Create a sentence:
// "[name] has [score] marks"
//
// Example:
// "Ali has 90 marks"

let student = {
  name: "Ali",
  score: 90,
};
console.log(`${student.name} has ${student.score} marks`);

// Question 19
// Given the object below:
// Add a new subject into the subjects array.
// Then print the updated subjects.

let student = {
  name: "John",
  subjects: ["Math", "English"],
};
student.subjects.push("Sex Ed");
console.log(student.subjects);
// Question 20
// Given the object below:
// Calculate the final price after discount.
//
// Formula:
// final price = price - discount

let product = {
  name: "Laptop",
  price: 3000,
  discount: 500,
};
product.finalPrice = product.price - product.discount;

console.log(product.finalPrice);
