/*Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42)*/

const readlineSync = require("readline-sync");
let favno = readlineSync.questionInt("Enter your favorite number : ");
/* while repeats code as long as the condition stays true. */
while (favno != 42) {
    console.log("Are you sure?");
    favno = readlineSync.questionInt("Please Enter your favorite number correctly : ");
}