// Create a function factorial(a) that returns the factorial of a number.
// That function must be recursive.

// factorial - The product of an integer and all the integers below it.
// eg: 5! = 5 * 4 * 3 * 2 * 1
// n! = n * (n - 1) * (n - 2) * ...*1
// Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result.(if else)

const readlineSync = require("readline-sync");
let a = new Number(readlineSync.questionInt("Please enter a number : "));

function factorial(a) {
    if (a == 1) {
        return a;
    } else {
        return a * (factorial(a - 1));
    }
}
console.log("The factorial of a number is : " + factorial(a));