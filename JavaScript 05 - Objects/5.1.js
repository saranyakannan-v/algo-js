// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//     Name
//     Production year
//     Names of the cast members (there can be as much as the user want)

// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

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


console.log(JSON.stringify(askTvSerie(), null, 3));