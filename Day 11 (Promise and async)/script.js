const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("This is a message"));
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise was rejected"));
  }, 2000);
});

promise2.catch((error) => {
  console.log("Error Caught", error);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("getting data...");
  }, 1000);
});

promise3
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("fetching Data...");
      }, 1000);
    });
  })
  .then((data) => {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is data");
      }, 1000);
    });
  })
  .then((data) => {
    console.log(data);
  });

promise3.catch((error) => {
  console.log(error);
});

async function asyncFunction() {
  const promise4 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 4 has been resolved");
    }, 2000);
  });
  console.log(promise4);
}

asyncFunction();

async function tryCatchFunction() {
  try {
    const promise5 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise 5 has been rejected");
      }, 2500);
    });
    console.log(promise5);
  } catch (error) {
    console.log(error);
  }
}

tryCatchFunction();

const promise6 = new Promise((resolve, reject) => {
  fetch(`https://fakestoreapi.com/products`).then((response) => {
    if (!response.ok) {
      reject(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  }).then((data)=>{
    resolve(data)
  }).catch(error=>{
    reject(error)
  })
});

promise6.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

const fetchingData = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  console.log(data);
};

fetchingData();


Promise.all([promise3,promise6]).then((values)=>{
    console.log(values)
})

Promise.race([promise3,promise6]).then((values)=>{
    console.log(values)
})