/*Ask two integers to the user. Display the rest of the integer division of the two numbers.*/
const readlineSync = require("readline-sync");
let int1 = readlineSync.questionInt("Enter the first integer :");
let int2 = readlineSync.questionInt("Enter the second integer :");
let output = int1 / int2;
console.log(output);