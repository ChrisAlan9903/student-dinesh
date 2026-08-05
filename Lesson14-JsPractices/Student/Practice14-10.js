// ============================================================
// QUESTION 10: Search for a Product 🔍
// Difficulty: Medium
// ============================================================

// Create a function named isProductAvailable.
//
// Parameters:
// - products: an array of strings
// - searchProduct: a string
//
// Use a loop to check whether searchProduct exists
// inside the products array.
//
// Return true if it exists.
// Return false if it does not exist.
//
// Do not use includes(), indexOf() or find().

function isProductAvailable(products, searchProduct) {
  // Write your solution here
  let trueOrFalse;
  for (product of products) {
    if (product == searchProduct) {
      return (trueOrFalse = true);
    } else if (product == null) {
      //no idea how to bypass "undefined"
      trueOrFalse = false;
    } else {
      trueOrFalse = false;
    } //Note: should loop all first before decide it is false
  }
  return trueOrFalse;
}

// Test cases:
console.log(isProductAvailable(["Laptop", "Mouse", "Keyboard"], "Mouse"));
// true

console.log(isProductAvailable(["Laptop", "Mouse", "Keyboard"], "Monitor"));
// false

console.log(isProductAvailable([], "Laptop"));
// false
