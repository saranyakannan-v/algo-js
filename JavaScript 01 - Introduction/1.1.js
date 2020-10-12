/*This line of code at the top of your file to import the little library we installed earlier*/
const readlineSync = require("readline-sync");
/*Defined a variable inside the function*/
function test() {
    /*variable var - global*/
    var num = 100;
    console.log("value of num in test() " + num); {
        console.log("Inner Block begins")
            /*let - it is a block scope variable*/
        let num = 200;
        console.log("value of num : " + num);
    }
}
test()