/*Ask two integers to the user. Display the rest of the integer division of the two numbers.*/
const readlineSync = require("readline-sync");
/*this questionInt will allow the user only to type integer not the characters */
let int1 = readlineSync.questionInt("Enter the first integer :");
let int2 = readlineSync.questionInt("Enter the second integer :");
let output = int1 / int2;
console.log(output);