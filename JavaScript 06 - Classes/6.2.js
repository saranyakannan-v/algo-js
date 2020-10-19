// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.

const readlineSync = require("readline-sync");
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    // The coordinates of foursides of a rectangle :
    get top() { return this.topLeftYPos; }
    get right() { return this.topLeftXPos + this.width; }
    get left() { return this.topLeftXPos; }
    get bottom() { return this.topLeftYPos + this.length; }

    collides(otherRectangle) {

        if (this.top > otherRectangle.bottom ||
            this.right < otherRectangle.left ||
            this.left > otherRectangle.right ||
            this.bottom < otherRectangle.top) {
            return false;
        } else {
            return true;
        }
    }
}

let rec1 = new Rectangle(1, 1, 5, 5);
let rec2 = new Rectangle(6, 6, 2, 2);
let rec3 = new Rectangle(4, 4, 4, 4);
let rec4 = new Rectangle(3, 3, 2, 2);

console.log(rec1.collides(rec2)); // true
console.log(rec1.collides(rec3)); // true
console.log(rec1.collides(rec4)); // true
console.log(rec2.collides(rec3)); // true
console.log(rec2.collides(rec4)); // false
console.log(rec3.collides(rec4)); // true