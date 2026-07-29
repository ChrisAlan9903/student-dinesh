// ============================================================
// BONUS QUESTION: ATM Withdrawal
// Difficulty: Hard
// ============================================================

// Create a function named withdrawMoney.
//
// Parameters:
// - account: an object
// - withdrawalAmount: a number
//
// The account object contains:
// - owner: string
// - balance: number
// - isActive: boolean
//
// Rules:
// 1. If the account is not active, return:
//    "Account is inactive."
//
// 2. If withdrawalAmount is 0 or less, return:
//    "Invalid withdrawal amount."
//
// 3. If withdrawalAmount is greater than the balance, return:
//    "Insufficient balance."
//
// 4. Otherwise:
//    - Subtract withdrawalAmount from account.balance.
//    - Return:
//      "[owner] successfully withdrew £[amount].
//       Remaining balance: £[balance]"
//
// This question modifies the balance property inside the object.

function withdrawMoney(account, withdrawalAmount) {
  // Write your solution here
}

// Test case 1:
let account1 = {
  owner: "John",
  balance: 500,
  isActive: true,
};

console.log(withdrawMoney(account1, 200));
// John successfully withdrew £200. Remaining balance: £300

console.log(account1.balance);
// 300

// Test case 2:
let account2 = {
  owner: "Mary",
  balance: 100,
  isActive: true,
};

console.log(withdrawMoney(account2, 150));
// Insufficient balance.

// Test case 3:
let account3 = {
  owner: "Peter",
  balance: 1000,
  isActive: false,
};

console.log(withdrawMoney(account3, 100));
// Account is inactive.

// Test case 4:
console.log(withdrawMoney(account1, -20));
// Invalid withdrawal amount.
