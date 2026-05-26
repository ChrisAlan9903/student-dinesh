// ========================================
// JavaScript Exercises: Function
// ========================================

// Lesson: Function
// 1. Is like a mini code file. You can have multiple function in 1 code file.
// 2. It is to store code block/operations.
// 3. When to use: when we have a feature/operation that we might going to use more that 1 time.

// Syntax:
// 1. Declaring/creating function without parameter (input)
function oddOrEven() {
  // 1.divide number by 2
  let balance = number / 2;
  // 2. check if there is decimal = odd. if no decimal = even
  if (balance == decimal) return "Odd";
  else return "even";

  return;
}

console.log("Function outpt: ", multipleOfThree(30));
// calling/invoking/using the function
// oddOrEven();

// Syntax:
// 2. Declaring/creating function with parameter (input)

function multipleOfThree(number) {
  // 1. divide input by 3
  let output = number % 3;
  //   let final;

  // 2. check if output has remainder or  not(if have = false, if dont have = true)
  if (output >= 1) {
    console.log("number is false");
    return false;
  } else {
    console.log("number is true");
    return true;
  }

  console.log("Finished checking !! going to end soon");

  return "final is: " + final;
}

// Syntax:
// 3. Declaring/creating function with  multiple parameters (inputs)

function multiply(firstNumber, secondNumber) {
  let ouput = firstNumber * secondNumber;
  return output;
}
