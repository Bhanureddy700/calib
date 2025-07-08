const obj = {name:"bhanu",age:20, stream:"cse"}

console.log(Object.keys(obj))

console.log(Object.values(obj))

console.log(Object.entries(obj))














// let day = "monda"

// switch(day){
//     case "monday":
//         console.log("yes today is monday!!")
//         break
//     case "tuesday":
//         console.log("yes today is tuesday")
//         break

//     default:
//         console.log("the day itself doesnt existed")
// }


array = [1,2,3,4,5]

// for(let i = 0;i<array.length;i++){
//     console.log(array[i])
// }
// for (let i of array){
//     console.log(i)
// }
// for (let i in array){
//     console.log(i)
// }

const [a,b,c,d,e] = array;
const {name:nameee,age:ageee,stream:streammm}=obj
console.log(nameee)