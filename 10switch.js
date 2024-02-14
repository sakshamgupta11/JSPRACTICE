function selectNumber(val) {
    let yourAnswer = "";
    switch(val){
        case 1: 
        yourAnswer = "you are selected 1"
        break;
        case 2:
            yourAnswer = "you are selected 2"
            case 3:
                yourAnswer = "you are selected 3"
default:
    yourAnswer = "invalid selection"
    }
    return yourAnswer;
}
console.log(selectNumber(4)) // invalid selection
console.log(selectNumber(1))// you are selected 1