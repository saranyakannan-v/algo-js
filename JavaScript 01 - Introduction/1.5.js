const readlineSync = require("readline-sync");
/*syntax for creating a number is let val = new Number(number); */
let decimalone = new Number(readlineSync.question("Enter a first decimal number : "));

let decimaltwo = new Number(readlineSync.question("Enter a second decimal number : "));
/*syntax : Math.round(x)*/
let integer = Math.round(decimalone) * decimaltwo;

console.log(integer);