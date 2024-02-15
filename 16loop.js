const ourarr =[];
let i;
for(i=1;i<10;i++){
    console.log(ourarr.push(i),"\n\n");
}
// interate even numbers with a for loops

const ourarr1 =[];
for(let i=0; i<10; i+=2){
    console.log(ourarr1.push(i));
}
console.log(ourarr1,"\n\n");
 
// interate odd numbers with for loop

const ourarr2 = [];
for(let i =1; i<10; i+=2){
    ourarr2.push(i);
    console.log(ourarr2,"\n\n")
}

// backword even

const arr = []
for(let i=10; i>1; i-=2){
    arr.push(i)
    console.log(arr,"\n\n")
}

// backwords odd

const arr1 = [];
for(let i =9; i>0;i-=2){
    arr1.push(i)
    console.log(arr1)
}
// array with for loop

const myarr =[1,211,3,4,5]
for(let i=0; i<myarr.length; i++ ){
    console.log(myarr[i])
    
}
// add array element

const myarr1 = [20,20,20]
let total = 0;
for(let i =0; i<myarr1.length;i++){
    total+= myarr1[i]
}
console.log(total)