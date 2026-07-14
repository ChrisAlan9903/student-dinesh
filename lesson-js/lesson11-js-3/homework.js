// JavaScript If-Else Exercises

// 1. Check age
// Create a variable age = 18.
// If age is 18 or above, print "You are an adult".
// Else, print "You are underage".
let age;
function ageChecker(age) {
  if (age >= 18) {
    return "You are an adult";
  } else {
    return "You are an underage";
  }
}

console.log(ageChecker(18));

// 2. Check password
// Create a variable password = "12345".
// If password is equal to "12345", print "Login successful".
// Else, print "Wrong password".
function passwordChecker(password) {
  if (password === "12345") {
    return "Login successful";
  } else {
    return "Wrong password";
  }
}
console.log(passwordChecker(12345));

// 3. Check even or odd number
// Create a variable number = 7.
// If the number can be divided by 2 with no remainder, print "Even number".
// Else, print "Odd number".
function oddOrEven(num) {
  if (num % 2) {
    return "Number is odd";
  } else {
    return "Number is even";
  }
}
console.log(oddOrEven(7));

// 4. Check exam pass or fail
// Create a variable marks = 45.
// If marks is 50 or above, print "Pass".
// Else, print "Fail".
function grade(marks) {
  if (marks >= 50) {
    return "Pass, nicee";
  } else {
    return "Fail nub";
  }
}
console.log(grade(45));
// 5. Check temperature
// Create a variable temperature = 30.
// If temperature is above 28, print "It is hot".
// Else, print "It is not hot".
function checkTemp(temp) {
  if (temp > 28) {
    return "It is hot af";
  } else {
    return "Normal only la";
  }
}

// 6. Check if item is available
// Create a variable stock = 0.
// If stock is more than 0, print "Item available".
// Else, print "Out of stock".
function checkStock(stock) {
  if (stock > 0) {
    return "Item available";
  } else {
    return "Out of stock";
  }
}

// 7. Check username
// Create a variable username = "admin".
// If username is equal to "admin", print "Welcome admin".
// Else, print "Unknown user".
function checkUsername(user) {
  if (user === "Dinesh") {
    return `Welcome ${user}`;
  } else {
    return "Who r u";
  }
}
console.log(checkUsername("Dinesh"));

// 8. Check shopping discount
// Create a variable totalPrice = 120.
// If totalPrice is 100 or above, print "You get a discount".
// Else, print "No discount".
function checkDisc(totalPrice) {
  if (totalPrice >= 100) {
    return `I give u ${totalPrice / 10} ringgit discount la so the total price is ${totalPrice - totalPrice / 10}`;
  } else {
    return "No discount for u";
  }
}
console.log(checkDisc(1200));

// 9. Check driving speed
// Create a variable speed = 80.
// If speed is more than 60, print "Too fast".
// Else, print "Safe speed".
function samanOrNot(speed) {
  if (speed >= 80) {
    return `Sir, your driving ${speed}km/h in a school zone`;
  } else {
    return "Youre safe for today, sir Chris";
  }
}
console.log(samanOrNot(85));
// 10. Check number positive or negative
// Create a variable number = -5.
// If number is 0 or above, print "Positive number".
// Else, print "Negative number".
function plusOrMinus(num) {
  if (num >= 0) {
    return "Positive number";
  } else {
    return "Negative number";
  }
}
console.log(plusOrMinus(-2));
