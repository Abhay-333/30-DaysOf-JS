// Activity 1
function ArithmeticOperations(num1, num2) {
  function addition(num1, num2) {
    return console.log("The sum of num1 and num2: ", num1 + num2);
  }
  addition(num1, num2);

  function minus(num1, num2) {
    return console.log("The substraction of num1 and num2: ", num1 - num2);
  }
  minus(num1, num2);

  function multiply(num1, num2) {
    return console.log("The multiplication of num1 and num2: ", num1 * num2);
  }

  multiply(num1, num2);

  function divide(num1, num2) {
    return console.log("The division of num1 and num2: ", num1 / num2);
  }
  divide(num1, num2);

  function modulus(num1, num2) {
    return console.log("The remainder of num1 mod num2 is: ", num1 % num2);
  }
  modulus(num1, num2);
}

ArithmeticOperations(42, 2);
// Activity 2
let num1 = 0;
let num2 = 1000000000000;
setInterval(() => {
  num1 += 1;
  num2 -= 1;
  console.log(num1);
  console.log(num2);
}, 1000);

// Activity 3
let age = 18;

if (age >= 18 && age === 18) {
  console.log("You can vote");
} else if (age < 18) {
  console.log("You cannot vote");
} else if (age == 0 || age <= 0) {
  alert("Please Enter a valid age");
}

let num3 = 1;
let num4 = true;

if (num3 == num4) {
  console.log("Here the condition gets true in == operators");
}

if (!(num3 === num4)) {
  console.log(
    "Here the condition gets false in === operators. Because === operators also checks the data type of the given variable"
  );
}

// Activity 5
function signChecker() {
  const num5 = "asd";
  num5 > 0
    ? console.log("The given number is positive")
    : num5 < 0
    ? console.log("The given number is negative")
    : num5 === 0
    ? console.log("The given number is zero")
    : console.log(num5, "is not a number");
}

signChecker();
