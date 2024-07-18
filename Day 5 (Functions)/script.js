function evenOrOdd() {
  let num1 = 22;
  if (num1 % 2 === 0) {
    console.log("The given number is Even");
  } else {
    console.log("The given number is Odd");
  }
}

evenOrOdd();

function square() {
  let num1 = 3;
  return console.log(`The square of ${num1} is: ${num1 * num1}`);
}

square();

// Activity 2
function maxOf2() {
  let num1 = 25;
  let num2 = 213;
  if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
  } else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

maxOf2();

function concatinate() {
  let str1 = "This is ";
  let str2 = "JS with React";
  let str3 = str1.concat(str2);
  console.log(str3);
}
concatinate();

// Activity 3

const sumOf2 = () => {
  let num1 = 41;
  let num2 = 9;
  console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
};
sumOf2();

const checker = () => {
  let str = "Abhay";
  let splitText = str.split("");
  console.log(splitText);

  splitText.forEach(function (e) {
    if (e === "a" || e === "A") {
      return console.log(true);
    } else {
      return console.log(false);
    }
  });
};

checker();

// Activity 4
function productOf2UsingParameters(num1, num2 = 4) {
  return console.log(`The product of the given number is: ${num1 * num2}`);
}

productOf2UsingParameters(2, 5);
function reapeat(functionName, n) {
  for (let i = 1; i <= n; i++) {
    greetings();
  }
}

function greetings(str, age = "a teen") {
  return console.log(
    `Good Morning and Welcome ${str} to our website i guess must be ${age}`
  );
}

reapeat(greetings, 5);

function higher(funct1, funct2, value) {
  return funct2(funct1(value));
}

// higher(funct1, funct2, 42);

function funct1(num1) {
  return num1*5;
}

function funct2(num2) {
  return num2*2;
}

console.log(higher(funct1, funct2, 5))