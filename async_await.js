function birthday(){
    return new Promise ((resolve,reject)=>
    setTimeout(()=> {
        reject("happy birthday");
    },1000))
}

async function wishing(){
    try{
const abc = await birthday()
console.log(abc)
    }
    catch(error){
        console.log("error:",error)
    }
}

wishing()