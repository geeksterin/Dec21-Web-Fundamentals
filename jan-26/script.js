// 

const fullName="sudhanshu kumar"


// console.log(a)
// console.log(b)

var c=30;
function do_job(){

    if(c===30){
        let x=33;
        console.log(b)
    }    

    const a=10;
    console.log(c)
}

do_job()


console.log(fullName)


const firstName = "sudhanshu"
const lastName = "kumar"



function do_job(){
    const a=10
    const b=20
    if(a===10){
        let c = a+b
    }
    
}
do_job()



const x=10


function printX(){
    const x=11
    console.log(this)
}
const test_obj={
    x:42,
    printX:function(){
        console.log(this.x)
    }
}
test_obj.printX()

printX()


function printInfo(){
    console.log(this.name)
    console.log(this.age)
}
const rabbit1={
    name:"pablo",
    age:"9"
}

const rabbit2 ={
    name:"escobar",
    age:'6'
}

printInfo.call(rabbit1)