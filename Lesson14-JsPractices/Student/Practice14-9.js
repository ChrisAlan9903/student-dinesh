// ============================================================
// QUESTION 9: Find the Highest Temperature
// Difficulty: Medium
// ============================================================

// Create a function named findHighestTemperature.
//
// Parameter:
// - temperatures: an array of numbers
//
// Use a loop to find and return the highest temperature.
//
// You may assume the array always contains at least one number.
//
// Do not use Math.max().
let biggest = temperatures[i];
function findHighestTemperature(temperatures) {
  // Write your solution here
  for (let i = 0; i <= temperatures.length; i++) {
    if (temperatures[i] > biggest) {
      biggest = temperatures[i];
    }
  }
  return biggest;
}

// Test cases:
console.log(findHighestTemperature([28, 31, 29, 35, 30]));
// 35

console.log(findHighestTemperature([10, 5, 8]));
// 10

console.log(findHighestTemperature([-3, -8, -1, -5]));
// -1
