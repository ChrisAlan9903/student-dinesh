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
