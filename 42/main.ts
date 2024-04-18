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

//call make_great function to modify magicians name
let great_magicians = make_great(magician_names);

// call show_magicians that show  modified list of mahicians
show_magicians(great_magicians)