// ============================================================
// QUESTION 7: Employee Overtime Pay
// Difficulty: Medium
// ============================================================

// Create a function named calculateWeeklyPay.
//
// Parameters:
// - hoursWorked: a number
// - hourlyRate: a number
//
// Rules:
// - The first 40 hours use the normal hourly rate.
// - Any hours above 40 are paid at twice the hourly rate.
//
// Return the employee's total weekly pay.
//
// Example:
// 45 hours at £10 per hour:
// Normal pay: 40 × £10
// Overtime pay: 5 × £20

function calculateWeeklyPay(hoursWorked, hourlyRate) {
  // Write your solution here
}

// Test cases:
console.log(calculateWeeklyPay(30, 10)); // 300
console.log(calculateWeeklyPay(40, 10)); // 400
console.log(calculateWeeklyPay(45, 10)); // 500
console.log(calculateWeeklyPay(50, 8)); // 480
