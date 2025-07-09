const array = [2,11,15,7]
let target = 9
let c= 0
for(let i =0;i<array.length-1;i++){
for(let j =1;j<array.length;j++){
    if(array[i]+array[j]===target){
        console.log(i,j)
        c=1
        break;
    }
}
}
if(c === 0){
    console.log("no pair existed")
}