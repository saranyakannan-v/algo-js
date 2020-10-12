/*Ask to the user its shoe size and its birth year. Then make the following calculation:

    Multiply the shoe size by 2
    Add 5 to the result
    Multiply that by 50
    Subtract the birth year
    Add 1766

Test with your own birth year and your shoe size.*/
const readlineSync = require("readline-sync");
let size = readlineSync.questionInt("Please enter your shoe size : ");
let birthyear = readlineSync.questionInt("Please enter your year of birth : ");
let Multiply = size * 2;
let Add = Multiply + 5;
let calc1 = Add * 50;
let calc2 = calc1 - birthyear;
let output = calc2 + 1766;
console.log(output);