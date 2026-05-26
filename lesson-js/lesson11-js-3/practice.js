// Write a program that checks whether a number is even or odd.

// 1. create a function called oddOrEven that accept number as argument (parameter), and return an outpt
function oddOrEven(number) {
  // 2. write a logic to check even or odd
  //   use % to check the number

  if (number % 2) {
    return "Odd";
  } else {
    return "even";
  }
  return;
}

console.log(oddOrEven(3));

// 3. create if-else and check the logic output. if output = even, return "even". if output = odd, return "odd"

// Q2. Write a program that check whether a person is teenager or adult. Hint (teenager age between 13-21, adult is 21 above)

function ageChecker(age) {
  if (age < 12) {
    return "Kid";
  } else if (age >= 13 && age <= 21) {
    return "Teenager";
  } else {
    return "Adult";
  }
}

console.log(ageChecker(20));

function ageChecker2(age) {
  if (age > 21) {
    return "Adult";
  } else if (age >= 13 && age <= 21) {
    return "Teenager";
  } else {
    return "Kid";
  }
}

console.log(ageChecker2(25));
