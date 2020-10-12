/*Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative)
*/
const readlineSync = require("readline-sync");
let min = new Number(readlineSync.question('Enter min number : '));
let max = new Number(readlineSync.question('Enter max number : '));
let current = new Number(readlineSync.question('Enter current number : '));
/*used comparison and Logical operator in if else condition*/
if (current >= min && current <= max) {
    console.log("The current number is between min and max.");
} else {
    console.log("Kindly enter the number which has to be greather than " + min + " and less than " + max);
    return;
}