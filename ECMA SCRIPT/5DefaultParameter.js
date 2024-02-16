const myName =( name = "guys") => "Hello " + name;
console.log(myName('saksham')) // Hello saksham 
// if we do not pass any value so default will work

console.log(myName()) // Hello guys 
console.log(myName("Developer")) // Hello Developer
// #2
    
const multi= (num1, num2 = 0) => num1 * num2;
console.log(multi(2,2)); // 4
console.log(multi(5)) // 0
