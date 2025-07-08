
const greet = function() {
  return ("Hello");
};
console.log(greet())


function makeFunc() {
  const name = "Mozilla";
  function dis() {
    console.log(name);
  }
  return dis;
}
const abc = new makeFunc();

(abc());


function handler(size) {
    return function () {
        return `Setting font size to ${size}`;
    };
}


const clickEvent = handler('12px'); 
const result = clickEvent();        
console.log(result); 
