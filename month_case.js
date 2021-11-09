var readlineSync = require("readline-sync");
var month = readlineSync.questionInt("Enter number between 1 to 12 to know month and  days have that month:=");
var days_count ;

switch (month){
    case 1:
        text = "january 31 days"
        break
    case 2:
        text = "February 28 or 29 days"
        break
    case 3:
        text = " march 31 days"
        break
    case 4:
        text = "April 30  days"
        break
    case 5:
        text = "May 31 days"
        break
    case 6:
        text = " June 30 days"
        break
    case 7:
        text = "July 31 days"
        break
    case 8:
        text = "August 31 days"
        break
    case 9:
        text = "September 30 days"
        break
    case 10:
        text = "October 31 days"
        break
    case 11:
        text = "November 30 days"
        break
    case 12:
        text = "december 31 days"
        break    
}
console.log(text) ;