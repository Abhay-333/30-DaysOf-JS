const sayMyName = (name="Rohan")=>{
    console.log(`${name}`)
}

const right = ()=>{
    console.log(`You are Goddamn right!!!`)
}

const multiply = (num1=2,num2=2)=>{
    console.log(`The product of the given numbers is: ${num1*num2}`)
}

const substraction = (num1=5,num2=5)=>{
    console.log(`The difference between the given numbers is: ${num1-num2}`)
}

export {sayMyName, multiply,right};

export default substraction;