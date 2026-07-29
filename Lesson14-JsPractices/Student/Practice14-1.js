// ============================================================
// QUESTION 1: Online Order Delivery Fee
// Difficulty: Easy
// ============================================================

// Create a function named calculateDeliveryFee.
//
// Parameters:
// - orderAmount: a number
// - isMember: a boolean
//
// Rules:
// - If the customer is a member, delivery is free.
// - Otherwise, if the order amount is £50 or more, delivery is free.
// - Otherwise, the delivery fee is £5.
//
// Return the delivery fee as a number.

function calculateDeliveryFee(orderAmount, isMember) {
  // Write your solution here
}

// Test cases:
console.log(calculateDeliveryFee(30, false)); // 5
console.log(calculateDeliveryFee(50, false)); // 0
console.log(calculateDeliveryFee(20, true)); // 0
console.log(calculateDeliveryFee(100, true)); // 0
