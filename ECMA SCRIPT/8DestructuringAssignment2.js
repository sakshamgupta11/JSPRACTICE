const user = {
    saksham:{
        user1: "anmol",
        email: "sakshamgupta2308@gmail.com",
        mob: 90090909
    },
    ashmeet:{
        userName : "ashmeet",
        userEmail : "ashmeetkaur1123@gamil.com",
        mob : 24235869587
    }

}
console.log(user.saksham.user1);
console.log(user.saksham.email,"\n\n");
// or
const { saksham: {user1 ,email }  } = user;
console.log(user1,email,"\n\n") 
const {saksham:{user1 : userName , email: userEmail}} = user
console.log(userName,userEmail)
 