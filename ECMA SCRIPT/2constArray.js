// if we are descre const
const a = [1,2,3]

/* a = [3,1,2]  -> 
a = [3,2,1] will result in an error*/
 function aai(){
[a[0],a[1],a[2]] = [3,2,1]
return a
 }
console.log(aai());

let s = [5,4,1]
function ai(){
    s = [1,2,3]
    return s
}
console.log(ai())