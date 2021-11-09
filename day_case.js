var readlineSync = require("readline-sync")
var day = readlineSync.questionInt("Enter any day number:=")
var day_name ;

switch (day){
    case 1:
        day_name = "monday";
        break;
    case 2:
        day_name = "Tuesday";
        break;
    case 3:
        day_name = "Wednesday";
        break;
    case 4:
        day_name = "Thursday";
        break;
    case 5:
        day_name = "Friday";
        break;  
    case 6:
        day_name = "Saturday";
        break;    
    case 7:
        day_name = "Sunday";
        break;
}
console.log(day_name);