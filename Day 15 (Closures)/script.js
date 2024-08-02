function demo() {
  let a = 0;
  console.log(a);
  return function inner() {
    a = 5;
    console.log(a);
  };
}

// const func = demo();
// func();

function forTheCounter() {
  let counter = 0;
  return setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);
}

// forTheCounter()

function pvtCounter() {
  let counter = 100;
  return function () {
    for (let i = 0; i <= 5; i++) {
      counter++;
      console.log(counter);
    }
  };
}

// const innerfunction = pvtCounter()
// innerfunction()

function IDGenerator() {
  const str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,.<>?/`;
  let id = ``;

  for (let i = 1; i <= 20; i++) {
    let randomNumber = Math.floor(Math.random() * str.length);
    id += str.charAt(randomNumber);
  }
  console.log(id);
}

IDGenerator();

function user(userName) {
  var userName;
  return function () {
    console.log(`Hello!!! ${userName}, Welcome to our website.`);
  };
}

const greet = user("Abhay");
greet();

function forTheLoops() {
  let arr = [];
  for (let i = 0; i <= 5; i++) {
    arr.push(function () {
      console.log(`The index value of current function is: ${i}`);
    });
  }
  return arr;
}

const loop = forTheLoops();

for (let i = 0; i < loop.length; i++) {
  loop[i]();
}

const sum = function(a){
  var c =5
  return function(b){
    return a+b+c
  }
}

const value = sum(5)
console.log(value(5))

const itemManager = (function () {
  let items = [];
  console.log(items)
  return {
    addThisItem: function (item) {
      items.push(item);
      console.log(`${item} was added`);
    },

    removeItem: function (item) {
      const index = items.indexOf(item)
      console.log(index)
      if(index !== -1){
        items.splice(index,1)
        console.log(`${item} is removed`)
      }else{
        console.log(`${item} not found`)
      }
    },

    listItems:function(item){
      if(items.length === 0){
        console.log(`There are no items in the array: `)
      }
      else{
        console.log(`Items in Collection: `)
        items.forEach((item, index)=>{
          console.log(`${index +1}. ${item}`)
        })
      }
    }
  };

})();

itemManager.addThisItem("Apple")
itemManager.addThisItem("Grapes")
itemManager.addThisItem("Mango")
itemManager.addThisItem("Pineapple")

itemManager.removeItem("Pineapple")

itemManager.listItems()

// for memoization

let factorial = (input)=>{
  let fact = 1
  for(let i = input; i>=1;i--){
    fact *= i
  }
  return fact
}

const memo = (func)=>{
  let cache = {}
  return function(...args){
    let n = args[0]
    if(cache[n]){
      console.log("retrive from the cache")
      return cache[n]
    }else{
      console.log(`run for the first time`)
      let result = func(n)
      cache[n] = result
      return result;
    }
  }
}

const memoFactorial = memo(factorial)
console.time()
console.log(memoFactorial(5))
console.log(memoFactorial(5))
console.timeEnd()