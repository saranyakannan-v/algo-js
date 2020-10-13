// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:

//     [1, 2, 3, 4, 5] => 3
//     [100, 101, 102] => 101
// Average 1
const readlineSync = require("readline-sync");
let array1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (var i = 0; i < array1.length; i += 1) {
    sum1 += array1[i];
}
let average1 = sum1 / array1.length;
console.log("The average value of a given array is : " + average1);
//Average 2
let array2 = [100, 101, 102];
let sum2 = 0;
for (var i = 0; i < array2.length; i += 1) {
    sum2 += array2[i];
}
let average2 = sum2 / array2.length;
console.log("The average value of a given array is : " + average2);