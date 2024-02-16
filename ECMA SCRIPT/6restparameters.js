// Use the Rest Parameter with Function Parameters

const howmany= (...arr) =>{
    return " you are passed " + arr.length + " arguments"
}
console.log(howmany("1","2","3")) //  you are passed 3 arguments
console.log(howmany("a",null , [1,2,4],"p")) // you are passed 4 arguments