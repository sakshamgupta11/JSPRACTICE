const user = { name: 'saksham gupta', age: 8, no: "123"};

// const name = user.name;
// const age = user.age;
// console.log(name,age)
// or 
const {name,age} = user
console.log(name,age)

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today,tomorrow} = HIGH_TEMPERATURES
  console.log(today,tomorrow,"\n") //77 80

  const user1 = { name :'saksham', age: 3 };
//   Here's how you can give new variable names in the assignment:
  
  const { name: userName, age: userAge } = user1;
  console.log(userName,userAge)
  