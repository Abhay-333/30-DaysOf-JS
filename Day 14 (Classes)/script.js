class Person {
  constructor(name, age, lastName) {
    this.firstName = name;
    this.age = age;
    this.lastName = lastName;
  }

  greeting(name = "Akshay", age = 19) {
    console.log(
      `Hello! ${name}, I guess your age is ${age}. Welcome to our website`
    );
  }

  updateAge(updatedAge = this.age) {
    console.log(`Your age has been changed to ${updatedAge}`);
  }

  static genericGreet() {
    return console.log(`Greeting User.`);
  }

  get fullName() {
    return `The Full name of the user is: ${this.firstName} ${this.lastName}`;
  }

  set updateName({ updatedFirstName, updatedLastName }) {
    this.firstName = updatedFirstName;
    this.lastName = updatedLastName;
  }
}

const person = new Person("Akash", 25);
const person1 = new Person("Abhay", 25, "Dhaneshwar");
const person2 = new Person("Rakesh", 14, "Yadav");

console.log(person1.fullName); 
console.log(person2.fullName); 

class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
    Student.studentCount += 1;
  }

  greetStudentID() {
    return this.studentID;
  }

  greeting() {
    return console.log(
      `Hello! ${this.firstName}, You are ${this.age}, and your studentID is: ${this.studentID}`
    );
  }

  static getStudentCount() {
    return console.log(`The Total number of Students is: ${Student.studentCount}`);
  }
}

const student = new Student("Akbar", 21, 101);
const student2 = new Student("Abhay", 19, 102);
const student3 = new Student("Amar", 20, 103);

student.greeting(); 
Person.genericGreet(); 

Student.getStudentCount(); 
