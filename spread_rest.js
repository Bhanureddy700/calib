const array=[1,2,3,4]
const arr1 = [...array,5,6,7,8]

console.log(arr1)

const obj = {name:"bhanu",age:20}
const obj1 = {...obj,stream :"cse"}

console.log(obj1)



function sumof(...nums){
    let arr = nums.reduce((a,b)=>a+b)
    return arr
}

console.log(sumof(1,2,3,4,5,6,7,8,9,10))