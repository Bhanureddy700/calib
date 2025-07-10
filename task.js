let array = [1,2,1,1,2,2,3,2,2,4,5,6]

const map = new Map()

for(let i =0;i<array.length;i++){
    if(!(map.has(array[i]))){
        map.set(array[i],1)
    }
    else{
        map.set(array[i],map.get(array[i])+1)
    }
}
console.log(map)
for (let [a,b] of map.entries()){
    console.log(`${a} repeated for ${b} times`)
}

// let temp = 0

// for(let i =0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i] > array[j]){
//             temp = array[i]
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }
// }

// console.log(array)
// let array1 = []
// for(let i = 0;i<array[array.length-1]+1;i++){
// array1.push(0)
// }

// for(let j = 0;j<array.length;j++){
//     array1[array[j]]+=1
// }

// for(let i =1;i<array1.length;i++){
//     console.log(`${i} repeated for ${array1[i]} times`)
// }

