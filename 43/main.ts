// define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// functions to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians name
let magician_names = ["Harry Poter", "Shayan", "Hammad"];

//making  a copy of original array through .slice() function
let copy_magician_names = magician_names.slice();

// modify the copied array to include "The Great " with their names
let copy_great_magicians = make_great(copy_magician_names);

// show both array original and copied

//original
show_magicians(magician_names);

//copied
show_magicians(copy_great_magicians);