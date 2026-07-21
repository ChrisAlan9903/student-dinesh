// Lesson 12: Object
// 1. Object a one of the data type (reference type)

// Why/When we need object:
// When we have a group of information for something/or someone

/*
 How Object looks like: 

{
    name: "Chris",
    age: 12,
    isSingle: true
}

*/

let box = {
  vehicleType: "car",
  numberOfTyre: 5,
  isAuto: false,
  colourOption: ["blue", "black"],
  manufacturingAddress: {
    country: "Malaysia",
    state: "Selangor",
  },
};

console.log(box.manufacturingAddress.state);

box.manufacturingAddress.state = "KL";
console.log(box.manufacturingAddress.state);

// Lesson 12.2: Accessing data in object
// 1. using dot notation ( . )
// 2. using bracket notation ( [] )

console.log(box.vehicleType);

let typeOfVehicle = box.vehicleType;
console.log(typeOfVehicle);

console.log(5 * box.numberOfTyre);

let field = "colourOption";

let isCarAuto = box[field];
console.log(isCarAuto);

// Lesson 12.3: Modify object
console.log("before change: ", box.numberOfTyre);
console.log("before change (whole): ", box);
box.numberOfTyre = 8;

console.log("after change: ", box.numberOfTyre);
console.log("after change (whole): ", box);

let item = {
  name: "Toyota",
  model: "Camry",
  year: 2012,
  option: null,
};

console.log(item);
// delete item.option;

item = {
  name: "Toyota",
  model: "Camry",
  year: 2012,
};

console.log(item);

// Extra note:
let dog = {
  name: "Puppu",
  breed: "Golden Retriever",
  age: 2,
  makeSound: function () {
    console.log("wonng wong");
  },
};

dog.makeSound();

let console = {
  // properites

  log: function (value) {},
};

let string = "Dinesh";

string.length;

console.log(string.toUpperCase());
