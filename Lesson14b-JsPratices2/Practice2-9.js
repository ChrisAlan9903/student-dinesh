// ============================================================
// QUESTION 9: Compress Consecutive Characters
// ============================================================
//
// Create a function named compressString that accepts one string.
//
// Count characters that appear consecutively and create a shorter
// string using the character followed by its count.
//
// Examples:
// compressString("aaabbc") should return "a3b2c1".
// compressString("xxxxzz") should return "x4z2".
//
// Important:
// Only count characters that are next to each other.
//
// For example:
// compressString("ababa") should return "a1b1a1b1a1".
//
// Write your function below:
//
//
//
// Test cases:
console.log(compressString("aaabbc")); // Expected: "a3b2c1"
console.log(compressString("xxxxzz")); // Expected: "x4z2"
console.log(compressString("abc")); // Expected: "a1b1c1"
console.log(compressString("ababa")); // Expected: "a1b1a1b1a1"
console.log(compressString("hhhh")); // Expected: "h4"
