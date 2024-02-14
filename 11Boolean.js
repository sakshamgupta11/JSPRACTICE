function isEqual(a,b){
    if(a<b){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEqual(5,6)) // true
console.log(isEqual(2,1),"\n"); // false 

// using boolean value

function isEqual1 (a,b){
return a<b
}
console.log(isEqual1(2,3))// true
console.log(isEqual(3,2),"\n") //false

// using arrow function

const isEqual2 =(a,b)=> a<b;
console.log(isEqual2(2,3)) // true
console.log(isEqual2(56,55)) // false