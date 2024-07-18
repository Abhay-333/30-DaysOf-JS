let arr1 = [1,2,3,4,5]
console.log(arr1, arr1[0], arr1[4])
arr1.push(6)
console.log(arr1)
arr1.pop(6)
console.log(arr1)
arr1.shift(0)
console.log(arr1)
arr1.unshift(1)
console.log(arr1)

const arr2 = arr1.map((elem)=>elem*2)
console.log(arr2)

const arr3 = arr1.filter((elem)=>elem % 2 === 0)
console.log(arr3)

const arr4 = arr1.reduce((acc, cv)=>acc+cv)
console.log(arr4)

for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i])
}

arr1.forEach(function(e){
    console.log(e)
})

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix)
console.log(matrix[0][0], matrix[0][1],matrix[0][2],matrix[1][0],matrix[1][1],matrix[1][2],matrix[2][0],matrix[2][1],matrix[2][2])