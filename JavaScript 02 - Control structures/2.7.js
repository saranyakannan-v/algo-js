// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter a number : ");
let newNo = 0;

for (i = 1; i <= n; i++) {
    /*varible defined in camel case*/
    newNo = newNo + readlineSync.questionInt("Enter a new number : ");
}
console.log(newNo);