function  generatorOTP(){
    var otp = Math.floor(100000+ Math.random()*900000);
return otp
}
console.log(generatorOTP());