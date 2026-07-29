// ============================================================
// QUESTION 11: Customer Membership Information
// Difficulty: Medium
// ============================================================

// Create a function named getCustomerSummary.
//
// Parameter:
// - customer: an object
//
// The customer object contains:
// - name: string
// - age: number
// - isMember: boolean
//
// Return a message using the following rules:
//
// If the customer is a member:
// "[name], age [age], is a member."
//
// Otherwise:
// "[name], age [age], is not a member."

function getCustomerSummary(customer) {
  // Write your solution here
  if (customer.isMember === true) {
    return `${customer.name}, age ${customer.age}, is a member.`;
  } else return `${customer.name}, age ${customer.age}, is not a member.`;
}

// Test cases:
console.log(
  getCustomerSummary({
    name: "Sarah",
    age: 25,
    isMember: true,
  }),
);
// Sarah, age 25, is a member.

console.log(
  getCustomerSummary({
    name: "Daniel",
    age: 30,
    isMember: false,
  }),
);
// Daniel, age 30, is not a member.
