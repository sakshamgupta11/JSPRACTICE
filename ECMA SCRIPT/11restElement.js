const [a,b,c,...q] = [1,2,3,4,5,6,7,8,9]
console.log(q) // rest element use access o rest element in array a =1,b=2, and c = 3
// so rest element q = 4 from 9
const [,, ...arr] = [1,2,3,4,5,6,7,8]
console.log(arr) // 3,4,5,6,7,8

const [z,x,...p] = [1,2,3,4,5,6,7,8,9,]
console.log(z,x); // 1 ,2
console.log(p); // 3,4,5,6,7,8,9