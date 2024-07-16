// Activity 1
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

let number = 5;
// for (let a = 1; a <= 10; a++) {
//   console.log(`${number} X ${a} = ${number * a}`);
// }

// Activity 2
let b = 0;
let sum = 0;
// while (b < 10) {
//   b++;
//   sum += b;
// }
// console.log(sum);

let c = 11;
// while(c > 1){
  //   c--
  //   console.log(c)
  // }
  
  // Activity 3
let d = 0;
// do{
//   d++
//   console.log(d)
// }while(d < 5)

let factorial = 5;
let input = 5
let e = 2;

do {
  input--
  factorial *= input;
} while (input > e);
// console.log(factorial);

// Actvity 4
let row = 5

for (let i = 1; i<=row;i++){
  let pattern = ''
  for(let j= 1; j<=i; j++){
    pattern += '*'
  }
  console.log(pattern)
}

// Activity 5 
for (let i = 1; i<=10;i++){
  if(i === 5){
    continue
  }
  console.log(i)
}

for (let i = 1; i<=10;i++){
  if(i === 7){
    break
  }
  console.log(i)
}