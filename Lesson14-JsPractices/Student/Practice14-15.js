// ============================================================
// QUESTION 15: Analyse a Student's Subjects
// Difficulty: Hard
// ============================================================

// Create a function named analyseStudent.
//
// Parameter:
// - student: an object
//
// The student object contains:
// - name: string
// - scores: an array of numbers
//
// Steps:
// 1. Use a loop to calculate the total score.
// 2. Calculate the average score.
// 3. Count how many subjects the student passed.
// 4. A subject is passed when its score is 50 or higher.
// 5. If the average is 50 or higher, the overall result is "Pass".
// 6. Otherwise, the overall result is "Fail".
//
// Return this message:
//
// "[name] has an average of [average], passed [number]
// subjects, and received an overall result of [result]."
//
// You do not need to format the average.

function analyseStudent(student) {
  // Write your solution here
}

// Test cases:
console.log(
  analyseStudent({
    name: "Alice",
    scores: [70, 60, 80],
  }),
);
// Alice has an average of 70, passed 3 subjects,
// and received an overall result of Pass.

console.log(
  analyseStudent({
    name: "Ben",
    scores: [30, 40, 50],
  }),
);
// Ben has an average of 40, passed 1 subjects,
// and received an overall result of Fail.

console.log(
  analyseStudent({
    name: "Cindy",
    scores: [50, 50, 50, 50],
  }),
);
// Cindy has an average of 50, passed 4 subjects,
// and received an overall result of Pass.
