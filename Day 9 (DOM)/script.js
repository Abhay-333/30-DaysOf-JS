const h1 = document.querySelector("#this")
const second = document.querySelector(".second")
const body = document.querySelector("body")
const ul = document.querySelector('body > ul')

h1.textContent = "This is h1"
second.style.background = "red"
h1.addEventListener("mouseenter",function(){
    h1.style.border = "2px solid white"
})

const newDiv = document.createElement("div")
newDiv.textContent = "This is the third one"

body.appendChild(newDiv)

const newLi = document.createElement("li")
newLi.textContent = "apple"

ul.appendChild(newLi)
ul.remove()

const parent = document.querySelector(".parent")
if(parent.lastElementChild){
    parent.removeChild(parent.lastElementChild)
}

const img = document.querySelector("body > img")
img.setAttribute('src', "https://images.unsplash.com/photo-1721197709662-615338eda4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D")

img.classList.add("imgClass")
img.classList.remove("imgClass")

const p = document.querySelector("body > p")
const submit = document.querySelector("#submit")

submit.addEventListener("click",function(){
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta in beatae id eveniet iusto. Aut incidunt doloribus officia sunt impedit."
})

