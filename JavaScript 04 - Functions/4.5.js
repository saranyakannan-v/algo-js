// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

const readlineSync = require("readline-sync");
// (x1,y1) and (x2,y2)
// square root of : (x2-x1)² + (y2-y1)²
function calcDistance(x1, y1, x2, y2) {
    let distance = 0;
    let x = x2 - x1;
    let y = y2 - y1;

    x *= x;
    y *= y;

    distance = Math.sqrt(x + y);

    return distance;
}

console.log(calcDistance(1, 1, 2, 2));
console.log(calcDistance(3, 4, 5, 7));