// Create a function factorial(a) that returns the factorial of a number.
// That function must be recursive.

const readlineSync = require("readline-sync");

// factorial - The product of an integer and all the integers below it.
// eg: 5! = 5 * 4 * 3 * 2 * 1
// n! = n * (n - 1) * (n - 2) * ...*1


function factorial(a) {
    let total = 1;
    while (a > 0) {
        total *= a;
        a = a - 1;
    }
    return total;
}
console.log("The factorial of a number is : " + factorial(5));