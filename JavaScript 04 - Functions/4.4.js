const readlineSync = require("readline-sync");

// Create a function named average(arr) that takes an array of numbers as argument and returns the average.
let arr = [5, 7, 9, 2, 1];

function average(arr) {
    let add = 0;
    for (i = 0; i < arr.length; i++) {
        add = add + arr[i];
    }
    add = add / arr.length;
    return add;
}
console.log("The average number of an array is : " + average(arr));

// Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

function min(...arr) {
    return Math.min(...arr);
}
console.log("The minimum value of an array is : " + min(...arr));

// Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
function max(...arr) {
    return Math.max(...arr);
}
console.log("The maximum value of an array is : " + max(...arr));

// Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

let n = new Number(readlineSync.questionInt("Can you please a number : ? "));

function rand10() {
    return (Math.floor(Math.random() * 10) + 1);
}

function multiRand(n) {
    let array = []; //empty array 
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return array;
}
let tripleFunction = multiRand(n);

console.log(tripleFunction);
console.log("The average is: " + average(tripleFunction));
console.log("The min is: " + min(...tripleFunction));
console.log("The max is: " + max(...tripleFunction));