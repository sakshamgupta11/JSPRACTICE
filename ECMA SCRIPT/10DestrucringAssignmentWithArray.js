const [a,b] = [1,2,3,4,5,6,];
console.log(a,b) // 1,2

// using destrucring Assignment

const [x,y,,,z] = [1,2,3,4,5,6,7,8]
console.log(x,y,z) // 1,2,5

// swap to number

let p = 23, q = 25;
[p, q] = [q, p];
console.log(p, q); // p = 23, q = 25

// using function

const myFun =() =>{
    [val,val1,,,,val2] = [1,2,3,4,5,6,8]

    console.log(val,val1,val2) // 1 ,2 ,6 

}
myFun()
