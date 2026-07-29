// ============================================================
// QUESTION 2: Student Result
// Difficulty: Easy
// ============================================================

// Create a function named getStudentResult.
//
// Parameters:
// - studentName: a string
// - score: a number
//
// Rules:
// - If the score is 50 or higher, return:
//   "[studentName] has passed."
//
// - Otherwise, return:
//   "[studentName] has failed."

function getStudentResult(studentName, score) {
  // Write your solution here
  if (score >= 50) {
    return `${studentName} has passed`;
  } else return `${studentName} has failed`;
}

// Test cases:
console.log(getStudentResult("Adam", 75));
// Adam has passed.

console.log(getStudentResult("Bella", 49));
// Bella has failed.

console.log(getStudentResult("Chris", 50));
// Chris has passed.
