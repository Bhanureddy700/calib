// function abc(callBack){
//     setTimeout(()=>{
//     console.log("hi i entered")
//     callBack(task2)
//     },5000)
    
      
// }
// function task1(task2){
//     console.log("task1")
//     task2(task3)
// }
// function task2(task3){
//     console.log("task2")
//     task3()
// }
// function task3(){
//     console.log("task3")
   
// }


// abc(task1)


let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
