// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// functions to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians name
var magician_names = ["Harry Poter", "Shayan", "Hammad"];
//making  a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
// modify the copied array to include "The Great " with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both array original and copied
//original
show_magicians(magician_names);
//copied
show_magicians(copy_great_magicians);
