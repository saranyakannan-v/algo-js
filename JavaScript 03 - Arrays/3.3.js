// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy.

let arr = [1, 2, 3, 4, 5];
let arrDup = []

for (let i = 0; i < arr.length; i++) {
    //push method - Adds one or more elements to the end of an array and returns the new length of the array.
    arrDup.push(arr[i]);
}

console.log(arrDup);


/* second method:
let arrCopy=[];
for (let i = 0; i< arr.length; i++){
    arrCopy=arr[i];
}
console.log(arrCopy);*/

/*Third method
let arr = [1, 2, 3, 4, 5];
//slice method - Extracts a section of an array and returns a new array.
let arrCopy = arr.slice();
console.log(arrCopy);*/