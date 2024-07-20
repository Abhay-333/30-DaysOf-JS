let name = "Abhay";
let age = 19;
let greeting = `Good Morning. ${name}`;
let intro = ` Name of victim is: ${name}, and his age is: ${age}`;
console.log(greeting + intro);

let arr1 = [1, 2, 3, 4, 5];
let [one, second, , fourth] = arr1;
console.log(one, second, fourth);

const book = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  year: 2012,
  displayTitle: function () {
    return console.log(
      `${this.title}, by ${this.author} released in ${this.year}`
    );
  },
  updatedYear: function (latestYear = 2018) {
    console.log((this.year = latestYear));
  },
};
book.displayTitle();

const {title, author} = book
console.log(title, author) 

const arr2 = [...arr1, 6,7,8,9]
console.log(arr2)

function sum(...rest){      // Use of rest operator is to gather the elements together
    return console.log(rest.reduce((acc,cv)=>acc+cv,0))
}

sum(3,5,2)

function product(num1, num2=1){
    return console.log(num1 * num2)
}

product(2)

const name1 = "Rahul"
const age1 = 22

const enhancedObj ={
    name1,
    age1,
    sayBye(){
        return console.log(`Good Morning ${this.name1}, I guess your age is: ${age1}`)
    },
}
enhancedObj.sayBye()

let name2 = "Alex Mercer"
let age2 = 20 
let birthYear = "User Birth Year"

function user(userName,userAge,YOB){
    return console.log({
        name: userName,
        UserAge: userAge,
        [birthYear]: YOB 
    })
}

user(name2,age2,19)
