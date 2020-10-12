/*Define three variables: name, firstName and city. Display them like this: "Your name is Gerard Lambert and you live in Paris.".*/
const readlineSync = require("readline-sync");
let name = "Lambert";
let firstName = "Gerard";
let city = "Paris";
/*", comma is used to give a space between text" and "+ is used for without space between the text "*/
console.log("Your name is ", firstName, name, "and you live in", city + ".");