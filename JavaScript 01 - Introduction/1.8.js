/*Create a "Story Teller".

Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.*/
const readlineSync = require("readline-sync");

let x = readlineSync.question("Question 1/3 : Who is your best friend?");

let y = readlineSync.question("Question 2/3 : What is your favorite food?");

let z = readlineSync.question("Question 3/3 : What is your favorite side dish?");

console.log("Your friend " + x + " is eating your " + y + ":-(" + "Are u hungry? grab it from her and your " + y + "with your favorite side dish hahaha" + z);