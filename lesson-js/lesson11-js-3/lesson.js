// ========================================
// JavaScript Exercises: Comparative, Logical Operation & Conditional
// ========================================

// Lesson 1: Comparative Operation in JS
// - symbol use to do comparison
// - output for this operation is always a boolean (true or false)

// a. equals to ( == )

console.log(20 == 30);

// b. not equals to ( != )

console.log(20 != 30);

// c. strict equals to ( === )
console.log("1" == 1);
console.log("1" === 1);

// d. bigger than ( > )
console.log("d: ", 3 > 1);

// e. smaller than ( < )
console.log("e: ", 3 < 1);

// f. bigger than  or equals to ( >= )
console.log("f: ", 30 >= 30);
console.log("f: ", 30 >= 31);

// g. smaller than  or equals to ( <= )
console.log("g: ", 30 <= 30);
console.log("g: ", 30 <= 31);

// Lesson 2: Logical Operation in JS
// - symbol use to do comparison
// - output for this operation is always a boolean (true or false)

// 2a. Or Operator ( || )
console.log("2a:", true || false);

// 2b. AND Operator ( && )
console.log("2b:", true && false);
console.log("2b:", true && true);

// 2c. NOT operator ( ! )
let c2 = true;
console.log("2c:", c2);
console.log("2c:", !c2);

// 2d. Nullish  ( ?? )
let origin;

let output = origin ?? "empty";

console.log("d2: ", output);

origin = null;

let output2 = origin ?? "emptyyy";
console.log("d2: ", output2);

let ori = false;
let value = ori || "kosong";

console.log("sample: ", value);

// Lesson 3: Conditionals(if-else)
if (false) {
  console.log("im true 1");
} else if (false) {
  console.log("im true 2");
} else if (false) {
  console.log("im true 2");
} else {
  console.log("im anything else");
}
