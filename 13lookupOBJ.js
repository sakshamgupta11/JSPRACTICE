function testobj (val){
    let result = ""
    const myobj ={
        "name": "saksham gupta",
        "role": "senior software engineer",
        "salary package": "Unexpected"
    };
    result = myobj[val]
    console.log(myobj.hasOwnProperty(val));
    return result;

}
console.log(testobj("name")) // true , saksham gupta
console.log(testobj("xyz")); // false , undefined