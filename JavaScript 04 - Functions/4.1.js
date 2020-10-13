// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

// Write a documentation for the calcSurface function.

const readlineSync = require("readline-sync");
//Step 1
function calcSurface1(length1, width1) {
    return length1 * width1;
}
console.log("The surface of the rectangle is : " + calcSurface1(10, 5));

//Step 2
let length2 = new Number(readlineSync.question('Can you please enter the length of a rectangle ?'));
let width2 = new Number(readlineSync.question('Can you please enter the width of a rectangle ?'));

function calcSurface2(length2, width2) {
    return length2 * width2;
}
console.log("The surface of the rectangle is : " + calcSurface2(length2, width2));