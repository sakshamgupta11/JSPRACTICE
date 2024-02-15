const Ourstorage ={
    "desk":{
        "drawer1":"calculator",
        "drawer2":"notes"

    },
    "cabinet":{
        "top drawer":{
            "folder 1": "a file",
            "folder 2": "secrests"
        },
        "bottom drawer":{
            "folder 1": "xyz",
            "folder 2": "abc"
        }
    }
};

console.log(Ourstorage.cabinet["bottom drawer"]["folder 2"]); // abc
console.log(Ourstorage.desk.drawer2) //  notes 
console.log(Ourstorage.hasOwnProperty(["cabinet"])); // true
console.log(Ourstorage.hasOwnProperty(["desk1"])); // false
console.log(Ourstorage.cabinet["top drawer"]["folder 3"]="etc");
console.log(Ourstorage.cabinet["top drawer"]["folder 3"]) // etc
delete Ourstorage.cabinet["top drawer"]["folder 3"]
console.log(Ourstorage.cabinet["top drawer"])

