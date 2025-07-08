//template literals
const name="bhanu", age = 20

const message = "my name is "+ name +" and age is "+ 5+7
console.log(message)




const meessagee = `my name is "+ ${name} +" and age is "+ ${5+7} `
console.log(meessagee)


// default parameters

// function abc(name){
//     name = name||"guest"
//     console.log(`hello ${name}`)

// }

function abc(name="guest"){
    console.log(`hello ${name}`)
}
abc()


//rest param

function sumof(){
    let sum_ = 0
    for(let i = 0;i<arguments.length;i++){
        sum_ += arguments[i]
    }
    console.log(sum_)
}


// function sumof(...nums){
//     let arr = nums.reduce((a,b)=>a+b)
//     console.log(arr)
// }

sumof(1,2,3,4,5,6,7,8,9,10)



const add = require("./module.js")
console.log(add())

// import { abc } from "./module"
