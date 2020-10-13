// Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

const readlineSync = require("readline-sync");

function rand10() {
    //Math.floor(x) - the largest integer less than or equal to x
    //Math.random()  always returns a number lower than 1

    return Math.floor(Math.random() * 10) + 1;
}

console.log("Display random number between 1 and 10: " + rand10());