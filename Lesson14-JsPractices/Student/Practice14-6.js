// ============================================================
// QUESTION 6: Calculate Shopping Cart Total
// Difficulty: Easy
// ============================================================

// Create a function named calculateCartTotal.
//
// Parameter:
// - prices: an array of numbers
//
// Use a for...of loop to add all the prices together.
// Return the total price.

function calculateCartTotal(prices) {
  // Write your solution here
  let sum = 0;
  for (price of prices) {
    sum += price;
  }
  return sum;
}

// Test cases:
console.log(calculateCartTotal([10, 20, 5])); // 35
console.log(calculateCartTotal([2.5, 4.5, 3])); // 10
console.log(calculateCartTotal([])); // 0
console.log(calculateCartTotal([100])); // 100
