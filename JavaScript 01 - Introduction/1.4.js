/*Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.*/
const readlineSync = require("readline-sync");
let firstname = readlineSync.question('Can you please enter your first name?');
console.log("Hai", firstname);
let city = readlineSync.question('Can you please enter your city?');
console.log("your city name is :", city);