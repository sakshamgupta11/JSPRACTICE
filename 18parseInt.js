function converTointeger(str){
    return parseInt(str)
}
console.log(converTointeger("56")); // 56
console.log(converTointeger("007")); // 7
console.log(converTointeger("ABC"));// NAN

// binary to decimal 

function converTointeger1(str){
    return parseInt(str,2)
}
console.log(converTointeger1("111001")) // 57 
