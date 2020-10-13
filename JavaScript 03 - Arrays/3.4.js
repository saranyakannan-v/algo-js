// Write a program that will display the minimum and maximum elements of a given array.
const readlineSync = require("readline-sync");

let array = [100, 20, 50, 90];
// syntax is Math.min(...array) and Math.max(...array) for finding minimum and maximum
console.log(Math.min(...array));

console.log(Math.max(...array));