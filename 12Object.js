const obj = {
    "name": "saksham gupta",
    "role": "senior software engineer",
    "salary package": "Unexpected"
};
//  access obj properties

console.log(obj.name);
console.log(obj["role"]);
console.log(obj["salary package"],"\n") // when we are accesing space properties

// updating obj proprties 
console.log(obj.name="sakham's");
console.log(obj["salary package"]= "don't know","\n");

// add a new propertis 

obj.skills=["js","nodejs","API",".net","etc"]
console.log(obj.skills);
obj["data type"]= ["string","number"]
console.log(obj["data type"],"\n")

// Delete a properties
delete obj["data type"]

// testing properties exist or not using .hasOwnProperty
console.log(obj.hasOwnProperty(["data type"])) // false
console.log(obj.hasOwnProperty("name")) // true

