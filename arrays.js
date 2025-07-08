let array = [1,2,3,4]

let arr1 = array.map(n=>n*n)
console.log(arr1)

let arr2 = array.filter(n=>n%2===0)
console.log(arr2)

let val1 = array.reduce((a,b)=>a+b,0)
console.log(val1)

array.forEach(n=>console.log(n))

const bool1 = array.some(n => n%2 === 0)
console.log(bool1)

const bool2 = array.every(n=>n%2 ===0)
console.log(bool2)