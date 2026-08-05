// ============================================================
// QUESTION 8: Create a Student Result Summary
// ============================================================
//
// Create a function named getStudentResult that accepts:
//
// 1. A student's name.
// 2. An array of marks.
//
// Calculate the student's average mark.
//
// Return an object containing:
// - name
// - average
// - status
//
// The status should be:
// - "Pass" if the average is 50 or higher.
// - "Fail" if the average is below 50.
//
// Example:
// getStudentResult("Ali", [60, 70, 80])
//
// Should return:
// {
//     name: "Ali",
//     average: 70,
//     status: "Pass"
// }
//
// Write your function below:
//
//
//
// Test cases:
console.log(getStudentResult("Ali", [60, 70, 80]));
// Expected:
// { name: "Ali", average: 70, status: "Pass" }

console.log(getStudentResult("Siti", [40, 50, 30]));
// Expected:
// { name: "Siti", average: 40, status: "Fail" }

console.log(getStudentResult("John", [50, 50, 50]));
// Expected:
// { name: "John", average: 50, status: "Pass" }
