// var variable1 = 25;         // Task 1
// let variable2 = "Abhay";    // Task 2
// const variable3 = true;     // Task 3

// console.log(variable1)     //Task 1
// console.log(variable2)     //Task 2
// console.log(variable3)     //Task 3

// Activity 3
let variable4 = 82;
let variable5 = "string";
let variable6 = false;
let variable7 = {
  name: "Abhay",
  id: 1234,
};

let variable8 = ["This is a array", 2, 5, 6, 5]; // typeof will be object because this is js objects are everywhere

// console.log(typeof(variable4))
// console.log(typeof(variable5))
// console.log(typeof(variable6))
// console.log(typeof(variable7))
// console.log(typeof(variable8))

// Activity 4
let variable9 = 52;
// console.log(variable9)
// console.log( variable9 = 29)

// Activity 5
// Note :: The typeof(argument) operator in JavaScript is designed to return simple, primitive data-types. For anything that is not primitive types the operator will returns "object". This includes array, plain objects and functions.
const variable10 = 190;
// console.log( variable10 = 29)       // Will show show an error [Uncaught TypeError: Assignment to constant variable.]

// Lets try pass by value
const a = 42;
// console.log(a); //Output: 42
const b = a;
// b = 412; //[Uncaught TypeError: Assignment to constant variable.]
// console.log(b); //Output: 42

//Lets try pass by reference

// In JavaScript, primitive data types (like numbers, strings, booleans, null, undefined, and symbols) are always passed by value. This means that when you assign user1Age to user2Age, you are copying the value, not the reference. As a result, user1Age and user2Age are two distinct variables holding the same value.

// If the variables were holding objects or arrays, the behavior would be different, as objects and arrays are passed by reference. This means that assigning one object to another variable would copy the reference, not the actual object. Any changes to the object via either variable would be reflected in both.

const c = [52];
console.log(c); // Output: [52]
const d = c; // Output :[52]
d[0] = 213;
console.log(d); //Output: [213]
console.log(c); // Output: [213]

// Feature Request 1
// const userInput = prompt(`Please enter a value to know it Data type`)
const userInput = function () {};
function variableType(userInput) {
  let dataType = typeof userInput;
  // console.log(dataType)

  let checkArr = function () {
    console.log(Array.isArray(userInput));
  };
  checkArr();

  if (dataType === "object") {
    console.log(`The ${userInput} is an object`);
  } else if (dataType === "string") {
    console.log(`The ${userInput} is an string`);
  } else if (dataType === "boolean") {
    console.log(`The ${userInput} is an boolean`);
  } else if (dataType === "number") {
    console.log(`The ${userInput} is an number`);
  } else if (Array.isArray(userInput) === true) {
    return console.log(`The ${userInput} is a Array`);
  } else if (dataType === "function") {
    return console.log(`The ${userInput} is a function`);
  } else if (isNaN(userInput)) {
    return console.log(`The ${userInput} is a NaN`);
  }
}

let x = 4
x=52
console.log(x)
const y = "Abhay"

setInterval(()=>{
    try {
        y = "Rahul"
    } catch (error) {
        console.error(`While Changing The value of y ${error}`)
    }
},1000)

variableType(userInput);
