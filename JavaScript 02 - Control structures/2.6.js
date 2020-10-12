// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
const readlineSync = require("readline-sync");
let week = readlineSync.questionInt("Enter a number between 1 and 7 :");
if (week === 1) {
    console.log("Monday");
} else if (week === 2) {
    console.log("Tuesday");
} else if (week === 3) {
    console.log("Wednesday");
} else if (week === 4) {
    console.log("Thursday");
} else if (week === 5) {
    console.log("Friday");
} else if (week === 6) {
    console.log("Saturday");
} else if (week === 7) {
    console.log("Sunday");
} else {
    console.log("The entered number is out of range !!! ");
    console.log("Please enter a number between 1 and 7");
}