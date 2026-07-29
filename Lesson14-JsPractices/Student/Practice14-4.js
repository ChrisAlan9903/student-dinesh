// ============================================================
// QUESTION 4: Product Stock Message
// Difficulty: Easy
// ============================================================

// Create a function named checkProductStock.
//
// Parameters:
// - productName: a string
// - stock: a number
//
// Rules:
// - If stock is 0, return:
//   "[productName] is out of stock."
//
// - If stock is from 1 to 5, return:
//   "[productName] has low stock."
//
// - Otherwise, return:
//   "[productName] is available."

function checkProductStock(productName, stock) {
  // Write your solution here
  if (stock === 0) {
    return `${productName} is out of stock`;
  } else if (stock >= 1 && stock <= 5) {
    return `${productName} has a low stock`;
  } else return `${productName} is available`;
}

// Test cases:
console.log(checkProductStock("Keyboard", 10));
// Keyboard is available.

console.log(checkProductStock("Mouse", 3));
// Mouse has low stock.

console.log(checkProductStock("Monitor", 0));
// Monitor is out of stock.
