var readlineSync = require("readline-sync");
var day = readlineSync.questionInt("Enter number between 1 to 12 to know month and  days have that month:=");

switch (day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        text = "working day"
        break
   
    case 6:
        text = " Saturday Night"
        break

    default:
        text = "Today is Off"  
}
console.log(text) ;