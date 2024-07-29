import { sayMyName, right, multiply } from "./module2.js";
import add from "./module1.js";
import person from "./module3.js";
import substraction from "./module2.js";
import user from "./module4.js";
import _ from "lodash";
import axios from "axios";

add(5, 5);
console.log(person);

sayMyName("Abhay");
right();
multiply();

substraction();
console.log(user);

const array1 = [1, 2, 3, 4, 5, 6];

const evenNumbers = _.filter(array1, (num1) => num1 % 2 === 0);
console.log(evenNumbers);

const maxNumber = _.max(array1);
console.log(maxNumber);

const api = `https://fakestoreapi.com/products`

axios.get(api).then((response)=>console.log(response.data))
.catch(error=>console.log(error))
