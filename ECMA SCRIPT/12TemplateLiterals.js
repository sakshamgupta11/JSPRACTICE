const myobj ={
    error1:["server error","404 not found","bad requrest"],
    error2:["server error","404 not found","bad requrest"],
    error3:["server error","404 not found","bad requrest"]
};
const myFun =(arr)=>{
 const myarray = [];
    for(let i=0; i < arr.length; i++){
        myarray[i] =(`this is an error of ${arr[i]}`)
        // or
        // myarray.pudh(`this is an error of ${arr[i]}`)
       
    }
    return myarray;
}
 const mydata = myFun(myobj.error3)
 console.log(mydata)