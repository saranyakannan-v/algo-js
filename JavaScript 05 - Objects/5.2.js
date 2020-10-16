// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.

const readlineSync = require("readline-sync");

function askTvSerie() {
    // using serie as a Object
    let serie = {
        name: readlineSync.question("What is your favourite TV serie? "),
        productionYear: readlineSync.question("What's the year of production of this serie? "),
        castMembers: askCastMembers()
    };
    return serie;
}

function askCastMembers() {
    let cast_members_array = [];
    let cast_member = "";
    while ((cast_member !== "") || (cast_members_array[0] == null)) {
        cast_member = readlineSync.question("Give me a cast member : ");
        if (cast_member !== "") {
            cast_members_array.push(cast_member);
        }
        if (cast_members_array[0] == null) {
            console.log("I need at least one cast member but once it's done, if you want to stop, you can just type nothing and enter.");
        }
    }
    return cast_members_array;
}
// JSON.stringify() method converts a JavaScript object or value to a JSON string
// syntax of JSON => JSON.stringify(value[, replacer[, space]])
console.log(JSON.stringify(askTvSerie(), null, 3));

let tvSerie = askTvSerie();

function randomizeCast(tvSerie) {
    let i = 0;
    let temp;
    let random;
    for (let i = 0; i < tvSerie.castMembers.length; i++) {
        random = Math.floor(Math.random() * tvSerie.castMembers.length - 1);
        temp = tvSerie.castMembers[i];
        tvSerie.castMembers[i] = tvSerie.castMembers[random];
        tvSerie.castMembers[random] = temp;
    }
    return tvSerie;
}

console.log(randomizeCast(tvSerie));