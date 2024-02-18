const value = {
    yesterday: { low: 64, high: 21, average: 11 },
    today: { low: 61, high: 22, average: 13 },
    tomorrow: { low: 63, high: 41, average: 14 }

};

// const {today:{low, high}}= value;
// console.log(low,high);
// const {tomorrow: {low: tomorrowlow,high: tomorrowhigh}} = value
// console.log(tomorrowlow,tomorrowhigh)

// or 
const { yesterday: { low, high }, today: { low: todaylow, high: todayhigh }, tomorrow: { low: tomorrowlow, high: tomorrowhigh } } = value 

console.log(low,high);
console.log(todaylow,todayhigh);
console.log(tomorrowlow,tomorrowhigh);