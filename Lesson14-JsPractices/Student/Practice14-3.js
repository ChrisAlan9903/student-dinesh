// ============================================================
// QUESTION 3: Shop Opening Status
// Difficulty: Easy
// ============================================================

// Create a function named getShopStatus.
//
// Parameters:
// - currentHour: a number from 0 to 23
// - isHoliday: a boolean
//
// Rules:
// - If it is a holiday, return "The shop is closed."
// - Otherwise, the shop is open from 9 until before 18.
// - Return "The shop is open." when it is open.
// - Return "The shop is closed." when it is closed.

function getShopStatus(currentHour, isHoliday) {
  // Write your solution here
  if (isHoliday === true) {
    return "The shop is closed.";
  } else if (currentHour >= 9 && currentHour < 18) {
    return "The shop is open.";
  } else return "The shop is closed.";
}

// Test cases:
console.log(getShopStatus(10, false)); // The shop is open.
console.log(getShopStatus(18, false)); // The shop is closed.
console.log(getShopStatus(8, false)); // The shop is closed.
console.log(getShopStatus(12, true)); // The shop is closed.
