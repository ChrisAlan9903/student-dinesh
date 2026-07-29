// ============================================================
// QUESTION 5: Count Available Seats
// Difficulty: Easy
// ============================================================

// A cinema uses an array of booleans to store seat availability.
//
// true means the seat is available.
// false means the seat has already been booked.
//
// Create a function named countAvailableSeats.
//
// Parameter:
// - seats: an array of booleans
//
// Use a for...of loop to count and return the number
// of available seats.
function countAvailableSeats(seats) {
  // Write your solution here
  let count = 0;
  for (seat of seats) {
    if (seat === true) {
      count++;
    }
  }
  return count;
}

// Test cases:
console.log(countAvailableSeats([true, false, true, true]));
// 3

console.log(countAvailableSeats([false, false, false]));
// 0

console.log(countAvailableSeats([true, true, true, true, true]));
// 5
