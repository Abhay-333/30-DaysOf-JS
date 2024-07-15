// Activity 1
let num1 = 1;
if (num1 > 0) {
  console.log("The given number is Positive");
} else if (num1 < 0) {
  console.log("The given number is Negative");
} else if (num1 === 0) {
  console.log("The given number is zero");
} else {
  console.error("Please Enter a Number");
}

let age = 10;
if (age === 0 || age < 0) {
  console.log("Please enter a valid age");
} else if (age >= 18) {
  console.log("You can vote");
} else if (age < 18) {
  console.log("You cannot vote");
}

// Activity 2 - largest of 3 numbers using if else

let num2 = 12;
let num3 = 1;
let num4 = 1;

if (num2 === num3 && num3 === num4) {
  console.log("All Numbers are equal");
} else if (num2 > num3 && num2 > num4) {
  console.log(`${num2} is largest among the given numbers`);
} else if (num3 > num2 && num3 > num4) {
  console.log(`${num3} is largest among the given numbers`);
} else if (num4 > num2 && num4 > num3) {
  console.log(`${num4} is largest among the given numbers`);
} else {
  if (num2 === num3 && num3 === num4) {
    console.log("All Numbers are equal");
  } else if (num2 === num3) {
    console.log(`${num2} is equal to ${num3}`);
  } else if (num2 === num4) {
    console.log(`${num2} is equal to ${num3}`);
  } else if (num3 === num4) {
    console.log(`${num2} is equal to ${num3}`);
  }
}

// Activity 3
let Days = 6;
let dayName = 0;

switch (Days) {
  case 1:
    dayName = `Monday`;
    break;

  case 2:
    dayName = `Tuesday`;
    break;

  case 3:
    dayName = `Wednesday`;
    break;

  case 4:
    dayName = `Thursday`;
    break;

  case 5:
    dayName = `Friday`;
    break;

  case 6:
    dayName = `Saturday`;
    break;

  case 7:
    dayName = `Sunday`;
    break;

  default:
    dayName = "Invalid number";
    break;
}

console.log(dayName);

let grade;
let marks = 50;

switch (true) {
  case marks < 35:
    grade = "F";
    break;
  case marks < 50:
    grade = "D";
    break;
  case marks < 70:
    grade = "C";
    break;
  case marks < 85:
    grade = "B";
    break;
  case marks < 90:
    grade = "A";
    break;

  default:
    "Enter Valid marks";
}

console.log(grade);

// Activity 4
let num5 = 14;
num5 % 2 === 0
  ? console.log("The given number is even")
  : console.log("The given number is odd");

// Activity 5
let year = 2023;

// if (year % 100 === 0 && !(year % 4 === 0 && year % 400 === 0)) {
//   console.log("This is not a leap year");
// } else if (year % 4 === 0 || year % 400 === 0) {
//   console.log("This is a leap year");
// }

if (year % 100 === 0) {
  console.log("This is not a leap year");
} else if (year % 400 === 0) {
  console.log("This is a leap year");
} else if (year % 4 === 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}

