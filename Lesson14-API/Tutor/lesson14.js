// LESSON 14: API (Application Programming Interface)
// What : This is general term people use to describe one the of way of how machine talk to each other
// Note: There are a few types of API, and we will focus on RESTful API.

// Terms to learn:
// 1. API
// 2. Request
// 3. Response
// 4. Endpoint (URL)
// 5. JSON(Js Object Notation) - (Message format)

//Lesson 14.b: Trying out fetch() to get data from an API

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
//   console.log(res);
// });

let users;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => (users = data))
  .then((data) => console.log(users));

// console.log(users);

// console.log(users);
// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   users = data;
//   console.log(users);
// }

// getUsers();
