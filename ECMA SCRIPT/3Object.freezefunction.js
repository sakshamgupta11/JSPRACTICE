let obj = {
    first_name: "saksham",
    last_name: "gupta",
    age: "don't know"

};
// using object.freeze function so the object can't be change
Object.freeze(obj);
obj.first_name = "anmol" // getting error 
obj.skills = ["x","y","z"] // getting error
console.log(obj)