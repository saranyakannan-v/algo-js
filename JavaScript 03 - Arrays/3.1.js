// Write a program that will add all the elements of an array.

// Test it with the following arrays:

//     [1, 2, 3, 4, 5] => 15
//     [100, 101, 102] => 303

const readlineSync = require("readline-sync");
let numbersArray1 = [1, 2, 3, 4, 5];
let numbersArray2 = [100, 101, 102];
sum1 = 0;
sum2 = 0;
for (i = 0; i < numbersArray1.length; i += 1) {
    sum1 += numbersArray1[i];
}
for (i = 0; i < numbersArray2.length; i += 1) {
    sum2 += numbersArray2[i];
}
console.log("sum of the array is : " + sum1);
console.log("sum of the array is : " + sum2);