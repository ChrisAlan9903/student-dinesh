// JavaScript Calculation Exercises (create a function)

// 1. Add two numbers
// Create two variables: num1 = 10 and num2 = 5.
// Calculate and print the total.
function addition(num1, num2) {
  let add = num1 + num2;
  return add;
}
console.log("Addition: " + addition(10, 5));

let additionOutput = addition(15, 20);
console.log(additionOutput);

addition(23, 23);

// 2. Subtract two numbers
// Create two variables: money = 100 and price = 35.
// Calculate how much money is left.
function subtraction(money, price) {
  let subtract = money - price;
  return subtract;
}
console.log("Subtraction: " + subtraction(100, 35));

// 3. Multiply two numbers
// Create two variables: quantity = 4 and itemPrice = 12.
// Calculate the total price.
function multiplication(quantity, itemPrice) {
  let multiply = quantity * itemPrice;
  return multiply;
}
console.log("Multiplication: " + multiplication(4, 12));

// 4. Divide two numbers
// Create two variables: totalMarks = 80 and subjects = 4.
// Calculate the average mark.
function division(totalMarks, subjects) {
  let divide = totalMarks / subjects;
  return divide;
}
console.log("Division: " + division(80, 4));

// 5. Calculate rectangle area
// Create two variables: width = 8 and height = 5.
// Calculate the area of the rectangle.
// Formula: width * height
function calculateArea(width, height) {
  let area = width * height;
  return area;
}
console.log("Area: " + calculateArea(8, 5));

// 6. Calculate triangle area
// Create two variables: base = 10 and height = 6.
// Calculate the area of the triangle.
// Formula: base * height / 2
function calculateTriangleArea(base, height) {
  area = base * height;
  triangleArea = area / 2;
  return triangleArea;
}
console.log("Triangle Area: " + calculateTriangleArea(10, 6));

// 7. Calculate age
// Create two variables: currentYear = 2026 and birthYear = 2010.
// Calculate the person's age.
function calculateAge(currentYear, birthYear) {
  let age = currentYear - birthYear;
  return age;
}
console.log("Age: " + calculateAge(2026, 2010));

// 8. Convert minutes to seconds
// Create one variable: minutes = 5.
// Convert it into seconds.
// Formula: minutes * 60
function minutesToSeconds(minutes) {
  convertToSeconds = minutes * 60;
  return convertToSeconds;
}
console.log("Minutes to Seconds: " + minutesToSeconds(5));

// 9. Calculate total score
// Create three variables: score1 = 75, score2 = 80, score3 = 90.
// Calculate the total score and average score.
function totalScore(score1, score2, score3) {
  average = score1 + score2 + score3 / 3;
  return average;
}
console.log("Average: " + totalScore(75, 80, 90));

// 10. Calculate discounted price
// Create two variables: originalPrice = 200 and discount = 20.
// Calculate the final price after discount.
// Formula: originalPrice - discount
function calculateDiscount(originalPrice, discount) {
  discountedPrice = originalPrice - discount;
  return discountedPrice;
}
console.log("Discounted Price: " + calculateDiscount(200, 20));

// Calculation operation:
// +, -, *, /, % ()

let qwe = 20 % 3;

console.log("qwe:", qwe);
