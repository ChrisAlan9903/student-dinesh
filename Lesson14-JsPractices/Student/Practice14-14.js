// ============================================================
// QUESTION 14: Generate a Simple Receipt 🔍
// Difficulty: Hard
// ============================================================

// Create a function named generateReceipt.
//
// Parameters:
// - shopName: a string
// - itemPrices: an array of numbers
// - isMember: a boolean
//
// Steps:
// 1. Use a loop to calculate the total price.
// 2. If the customer is a member, apply a 10% discount.
// 3. If the final total is £100 or more, delivery is free.
// 4. Otherwise, add a £5 delivery fee.
// 5. Return a message in this format:
//
// "[shopName] - Final total: £[finalTotal]"
//
// You do not need to format the number to two decimal places.

function generateReceipt(shopName, itemPrices, isMember) {
  // Write your solution here
  let sum = 0;
  for (i = 0; i < itemPrices.length; i++) {
    sum += itemPrices[i];
  }

  if (isMember == true) {
    sum = sum * (90 / 100);
  }

  if (sum < 100) {
    sum = sum + 5;
  }

  return `${shopName} - Final total: $ ${sum}`; // Note: Just follow the Steps in the questions
}

// Test cases:
console.log(generateReceipt("Tech Shop", [50, 30], false));
// Tech Shop - Final total: £85

console.log(generateReceipt("Tech Shop", [50, 50], false));
// Tech Shop - Final total: £100

console.log(generateReceipt("Book Shop", [40, 40], true));
// Book Shop - Final total: £77

console.log(generateReceipt("Game Shop", [100, 50], true));
// Game Shop - Final total: £135
