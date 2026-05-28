// ========================================
// JavaScript Lesson: Loops
// ========================================

// 1. There are a few types of loop.
// 2. What: Loop is a type of operation/code we use when we want to repeat something.
// 3. When: We use it to do repeated things. Using loop reduces the code we need.
// 4. Types of loop in JS:
//                      - for loop ⭐
//                      - while loop
//                      - do while loop
//                      - for in loop
//                      - for of loop ⭐
//                      - foreach loop
//                      - array method that loops

// Lesson 1a: For Loop
// Syntax:

/*
for (starting ; condition to stop ; increment/decrement){
    // operation/things to do on each loop 
}

*/
// Example: Basic for loop
for (let i = 1; i == 10; i++) {
  console.log("I am learning loop:", i);
  continue;
  break;
}

// Example: Basic for loop with break
for (let i = 1; i <= 10; i++) {
  // keep looping until the number is 4

  //   if (i == 4) break;

  console.log("I am learning loop with break:", i);
  break;
}

// Example: Basic for loop with continue
for (let i = 1; i <= 10; i++) {
  //   keep console.log, except when i is 5 or 7
  if (i == 5) continue;
  console.log("I am learning loop with break:", i);
  if (i == 7) continue;
}

// Example: Basic for loop with different increment
// Output: 2,4,6,8,10,12,14,16,18,20
for (let i = 20; i >= 2; i = i - 2) {
  console.log(i);
}

// Lesson 1b: For Of Loop
// Note: For of loop works with anything that is loopable(array, string)
// Syntax:

let string = "hello";
let array = ["Mariah Carey", "Taylor Swift", "Mia Khalifa", "Yua Mikami"];

for (let letter of array) {
  if (letter == "Mia Khalifa") {
    console.log("found our girl !");
    break;
  }

  console.log(letter);
}

let array2 = [1, 2, 3, 4, 10, 3];
for (let box of array2) {
  if (box == 4) break;
  console.log(box);
}

let array3 = [1, 2, 3, 4, 10, 3, 20];
for (let box of array3) {
  if (box == 3) continue;
  console.log(box);
}
