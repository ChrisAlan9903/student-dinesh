// ============================================================
// QUESTION 10: ATM Cash Withdrawal
// ============================================================
//
// Create a function named withdrawMoney that accepts:
//
// 1. The current account balance.
// 2. The requested withdrawal amount.
//
// Apply the following rules:
//
// - The withdrawal amount must be greater than 0.
// - The withdrawal amount must be divisible by 10.
// - The account must have enough balance.
// - A transaction fee of RM2 is charged for every successful
//   withdrawal.
//
// Return an object containing:
// - success
// - message
// - balance
//
// Possible messages:
//
// "Invalid amount"
// - If the amount is 0 or below.
//
// "Amount must be divisible by 10"
// - If the amount is not divisible by 10.
//
// "Insufficient balance"
// - If the balance cannot cover the withdrawal and the RM2 fee.
//
// "Withdrawal successful"
// - If the withdrawal is successful.
//
// Example:
// withdrawMoney(500, 100)
//
// New balance:
// 500 - 100 - 2 = 398
//
// Expected result:
// {
//     success: true,
//     message: "Withdrawal successful",
//     balance: 398
// }
//
// Write your function below:
//
//
//
// Test cases:
console.log(withdrawMoney(500, 100));
// Expected:
// {
//     success: true,
//     message: "Withdrawal successful",
//     balance: 398
// }

console.log(withdrawMoney(500, 55));
// Expected:
// {
//     success: false,
//     message: "Amount must be divisible by 10",
//     balance: 500
// }

console.log(withdrawMoney(100, 100));
// Expected:
// {
//     success: false,
//     message: "Insufficient balance",
//     balance: 100
// }

console.log(withdrawMoney(500, 0));
// Expected:
// {
//     success: false,
//     message: "Invalid amount",
//     balance: 500
// }

console.log(withdrawMoney(102, 100));
// Expected:
// {
//     success: true,
//     message: "Withdrawal successful",
//     balance: 0
// }
