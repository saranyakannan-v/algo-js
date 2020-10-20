// Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

class Rectangle {

    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

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

function rand(n) {
    return Math.floor(Math.random() * n) + 1;
}

let rectangle1 = [];

for (let i = 1; i <= 15; i++) {

    let rectangle = new Rectangle(rand(10), rand(10), rand(10), rand(10));
    rectangle1.push(rectangle);

}


for (let i = 0; i < rectangle1.length - 1; i++) {
    for (let j = i + 1; j < rectangle1.length; j++) {
        console.log("rectangle" + (i + 1) + " collides with rectangle" + (j + 1) + " : " + rectangle1[i].collides(rectangle1[j]));
    }
}