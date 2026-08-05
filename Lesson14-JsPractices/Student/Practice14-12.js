// ============================================================
// QUESTION 12: Apply a Discount to a Product 🔍
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
  let finalPrice = 0;
  let add = 0;
  if (product.hasDiscount === true) {
    add = product.price * (20 / 100);
    finalPrice = product.price - add; // Note: Need to just fix the math
    return `${product.name} costs $ ${finalPrice}`;
  } else return `${product.name} costs $ ${product.price}`;
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
