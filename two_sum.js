const array = [2,11,15,7]
let target = 9
let c= 0
array.sort((a,b)=>a-b)
console.log(array)
let i = 0, j= (array.length)-1
while(array[i]+array[j] !== target && i<j){
    if(array[i]+array[j] < target){
        i+=1
    }
    else{
        j-=1
    }
}
console.log(i,j)

console.log("hi i created branch here")