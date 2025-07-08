
function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}


const increment = outer();
console.log(increment()); 
console.log(increment()); 


function abc(){
  console.log(`hi im ${this.name}`)
}

const me = {
  name:"bhanu"
}
const me2 = {
  name:"saini"
}
const k = abc.bind(me)
const l = abc.bind(me2)
console.log(k())
l()

const an = (a,b) => a+b

console.log(an(3,5))

const man = function(a,b){
  return a+b
}

console.log(man(7,7))