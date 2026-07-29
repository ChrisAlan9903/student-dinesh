// ============================================================
// QUESTION 12: Apply a Discount to a Product
// Difficulty: Medium
// ============================================================

// Create a function named calculateProductPrice.
//
// Parameter:
// - product: an object
//
// The product object contains:
// - name: string
// - price: number
// - hasDiscount: boolean
//
// Rules:
// - If hasDiscount is true, give a 20% discount.
// - Otherwise, keep the original price.
//
// Return this message:
// "[product name] costs £[final price]"
//
// You do not need to format the number to two decimal places.

function calculateProductPrice(product) {
  // Write your solution here
}

// Test cases:
console.log(
  calculateProductPrice({
    name: "Headphones",
    price: 100,
    hasDiscount: true,
  }),
);
// Headphones costs £80

console.log(
  calculateProductPrice({
    name: "Webcam",
    price: 50,
    hasDiscount: false,
  }),
);
// Webcam costs £50
