const submit = document.querySelector("#submit");
const p = document.querySelector("body > p");
const img = document.querySelector("body > img");
const second = document.querySelector(".second");
const inp = document.querySelector(".inp1");

submit.addEventListener("click", function () {
  p.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam illo nobis rerum quia, esse nostrum eos doloremque id aperiam possimus.";
});

let flag = 0;
img.addEventListener("dblclick", function(){
    if(flag === 0){
        img.style.opacity=0
        flag =1
    }else if(flag ===1){
        img.style.opacity=1
        flag =0
    }
})

second.addEventListener("mouseover", function(){
    second.style.backgroundColor = "blue"
})

second.addEventListener("mouseout", function(){
    second.style.backgroundColor = "black"
})

inp.addEventListener("keydown",function(e){
    let input = ""
    input += e.key
    console.log( input)
})

let inp1 = document.querySelector(".inp")
let p2 = document.querySelector(".p2")

inp1.addEventListener("keyup", function(e){
    console.log(e.key)
    p2.textContent = "Current Value: " + inp1.value
})

const form = document.querySelector("body > form")
const Name = document.querySelector("#name")
const Ph = document.querySelector("#Ph")
const Email = document.querySelector("#email")
const Password = document.querySelector("#pass")
const submit2 = document.querySelector("#submit2")

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(Name.value)
    console.log(Ph.value)
    console.log(Email.value)
    console.log(Password.value)
})

const p3 = document.querySelector(".p3")
const selectElement = document.querySelector('#mySelect')
const addbtn = document.querySelector(".add")
const fruits = document.querySelector(".fruits")
const inp2 = document.querySelector("#forThefruits")
selectElement.addEventListener("change",function(){
    const selectedValue = selectElement.value
    p3.textContent = selectedValue ? `Select Value: ${selectedValue}` : `Selected value will appear here.`
})


fruits.addEventListener("click", function(e){
    console.log(e.target.innerHTML)
    console.log("Child added")
})

addbtn.addEventListener("click", function(){
    if(inp2.value.trim() === ""){
        console.log("Please enter a value")
    }else{
        const newLi1 = document.createElement('li')
        newLi1.textContent = inp2.value
        fruits.appendChild(newLi1)
    }
})