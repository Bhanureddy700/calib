const fun = function(a,b){
    return a+b
}
console.log(fun(5,9))


const fun1 =()=>{
    console.log("hello my name is bhanu");
}
console.log(fun1())

const fuun2 = (c,d)=>{
    console.log(c+d)
    return c+d
}
console.log(fuun2(10,10))

function hi(){
    return (`my name is ${this.name}`)
}
const me={
    name:"bhanu"
}
const nam = hi.bind(me)
console.log(nam())

console.log("hiiiii")

