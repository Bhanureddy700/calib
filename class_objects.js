class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    wishing(){
        console.log(`happy birth ${this.name} on your ${this.age}th birthday`)
    }
    abc(){
        this.age+=1
        console.log(`just today he turned ${this.age}`)
    }
}

const p1 = new person("bhanu",20)
const p2 = new person("sai",21)

// const p1 = new abc("bhanu",21)

p1.g()
// class person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     wishing(){
//         console.log(`happy birth ${this.name} on your ${this.age}th birthday`)
//     }
//     abc(){
//         this.age+=1
//         console.log(`just today he turned ${this.age}`)
//     }
// }

// const p1 = new person("bhanu",20)
// const p2 = new person("sai",21)

// p1.wishing();
// p1.abc();

console.log("hi")
console.log("again in main")
console.log("changed again")
p1.wishing();
p1.abc();
//console.log("heee")
