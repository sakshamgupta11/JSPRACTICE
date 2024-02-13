const lastcrac = "saksham";
const lastLatter = lastcrac[lastcrac.length-1]; // length = 7-1 = 6 so 6 = m


console.log(lastLatter,"\n") // output m  
console.log("using arror fun.... \n\n")
// using arrow function 

const arrfun = (last)=> {

    lastcrac1 = "saksham"
    lastLatter1 = lastcrac1[lastcrac1.length-last];
return lastLatter1;
}
console.log(arrfun(1),"\n"); // output m 

function fun(pass){
    const lastcrac2 = "coder"
    const lastLatter2 = lastcrac2[lastcrac2.length-pass];
    return lastLatter2;
}
console.log("using fun \n")
console.log(fun(1)) // output r
console.log(fun(2)) // output e
console.log(fun(3)) // output d
console.log(fun(4)) //  output o
console.log(fun(5)) //  output c
console.log(fun(0)) // undefined becouse lastcrac2[5] = c=0 ,o = 1, d=2, e= 3, r = 5

