/*Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.*/
const readlineSync = require("readline-sync");

for (let x = 1; x <= 100; x++) {
    /*even numbers*/
    if (x % 2 == 0) {
        console.log(x / 2);
    }
    /*Odd numbers*/
    else {
        console.log(x * 3);
    }
}