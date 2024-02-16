/* In JavaScript, we often don't need to name our functions, 
especially when passing a function as an argument to another function. 
Instead, we create inline functions. We don't need to name these functions
 because we do not reuse them anywhere else.*/

 function myFunc(){
    const a = new Date();
    return a 
 }
 console.log(myFunc())

 // using arror funtion
 const myFunc1 = ()=> {
const a = new Date();
return a
 }
 console.log(myFunc1())
 // or no need to return arrow function returns the value by default 

 const myFunc2 = () => new Date();
 console.log(myFunc2(),"\n\n");

 // Write Arrow Functions with Parameters

 const addnumber = (num1,num2) => num1+num2;
 console.log(addnumber(500,500));// 100
 
 // if we are are passing 1 armnt so no need () 
 const multi = a => a*5;
 console.log(multi(1000)) // 5000