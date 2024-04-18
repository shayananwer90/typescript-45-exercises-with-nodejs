//making a array of countries and print its original order
let countriesToVisit: String[] = ["Brazil", "Disney", "Afghanistan", "California"];
console.log("Original Order:", countriesToVisit);

// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

// print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

// we have changed the original array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

//print the array to show that it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// we have changed again the original array order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());