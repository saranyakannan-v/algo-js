/*Ask the user to enter its first name and display a message saying "Hello first name".*/
const readlineSync = require("readline-sync");
/*declaring variable with a question in it*/
let firstname = readlineSync.question('Can you give me your first name please?');
console.log("Hello " + firstname);