function ErrorFunc() {
  throw new Error("This is an error");
}

try {
  ErrorFunc();
} catch (error) {
  console.log("An Error occurred: " + error.message);
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("The Denominator must be other number than 0");
  }
  console.log("The division of the given numbers is: " + num1 / num2);
}

try {
  divide(4, 0);
} catch (error) {
  console.log(error);
}

function useOfFinally() {
  throw new Error("This is an error part2");
}

try {
  useOfFinally();
} catch (error) {
  console.log(error);
} finally {
  console.log("this was executed finally");
}

class CustomError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a Custom Error made by me    ");
}

try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Caught a custom error: " + error.message);
  } else {
    console.log("Caught a unknown error: " + error.message);
  }
}

function validation(input) {
  if (input.trim() === "") {
    throw new Error("Please dont enter an empty string.");
  }
  return input;
}

try {
  validation("");
} catch (error) {
  console.log(error);
}

const promise1 = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    reject("Promise 1 was rejected");
  } else {
    resolve("Promise 1 was resolved");
  }
});

async function forThePromise() {
  try {
    const result = await promise1;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

forThePromise();

const fetchingInvalid = async () => {
  try {
    const response = await fetch(`fakeStoreAPI`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`An error occurred while fetching the data: ${error}`);
  }
};

try {
  fetchingInvalid();
} catch (error) {
  console.log(error);
}
