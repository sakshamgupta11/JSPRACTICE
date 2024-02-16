    function checkscope (){
        var i = "function scope"
        if(true){
            var i = "block scope"
            console.log('block scope is',i)
        }
        console.log("function scope is",i);
    
    }
    checkscope("function scope") // block scope is block scope, function scope is block scope

    console.log("........................\n\n\n");

    function scopetest (){
        let i = "function scope1"
        if(true){
            let i = "block scope"
            console.log("block scope is ",i)
        }
        console.log("function scope is ",i);
    }
    scopetest("function scope") // block scope is  block scope,  function scope is  function scope1