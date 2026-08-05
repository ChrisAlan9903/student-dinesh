// ============================================================
// QUESTION 6: Calculate a Shopping Cart Total
// ============================================================
//
// Create a function named calculateCartTotal that accepts an array
// of product objects.
//
// Each product object contains:
// - name
// - price
// - quantity
//
// Calculate and return the total price of all products.
//
// Formula for each product:
// price × quantity
//
// Example:
// [
//     { name: "Book", price: 10, quantity: 2 },
//     { name: "Pen", price: 3, quantity: 4 }
// ]
//
// Total:
// (10 × 2) + (3 × 4) = 32
//
// Write your function below:
//
//
//
// Test cases:
console.log(
  calculateCartTotal([
    { name: "Book", price: 10, quantity: 2 },
    { name: "Pen", price: 3, quantity: 4 },
  ]),
); // Expected: 32

console.log(
  calculateCartTotal([
    { name: "Keyboard", price: 80, quantity: 1 },
    { name: "Mouse", price: 40, quantity: 2 },
  ]),
); // Expected: 160

console.log(calculateCartTotal([{ name: "Water", price: 2, quantity: 5 }])); // Expected: 10
