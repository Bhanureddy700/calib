// function abc(number,time){
//     return new Promise ((resolve,reject)=>
//     setTimeout(()=>{
//     console.log(number)
//     resolve()
// reject()},time)
//     )
// }

// abc(1,5000).then(()=> abc(2,1000)).then(()=> abc(3,4000))

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');