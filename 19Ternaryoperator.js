function findgreater(a,b){
    return a>b? "a is greater": "b is greater"
}
console.log(findgreater(5,6)); // b is greater
console.log(findgreater(56,9)); // a is greater
console.log("......................\n\n\n");

function checkequal(a,b){
    return a===b? "Equal": "Not equal"
}
console.log(checkequal(1,1))//  Equal
console.log(checkequal(1,"1")) // Not Equal
console.log(checkequal(2,1)); // Not Equal
console.log("...............\n\n");

function checksign(num){
    return (num>0)? "Positive":(num<0)? "Negative": "zero"

}
console.log(checksign(7)); // positive
console.log(checksign(-7)); // Negative
console.log(checksign(0)); // Zero 