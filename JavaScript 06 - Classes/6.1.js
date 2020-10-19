// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

// Test its method and accessors by modifying the values and checking if everything is consistent.

const readlineSync = require("readline-sync");

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        //Area = pi *r²  
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let obj1 = new Circle(15, 17, 5);
console.log(obj1);

obj1.xPos = 8;
obj1.yPos = 20;
obj1.radius = 9;
console.log(obj1);

obj1.move(5, 3); // 13, 23
console.log(obj1);
console.log("The surface is: " + obj1.surface);