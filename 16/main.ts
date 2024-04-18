//creating a Guest List Array
let guestList = ["Shayan","Kashan","Mubashir","Aliyan"];

//making variable for those guest who cant come
let dontCome = guestList[0];

//print the name of guest who cant come
console.log(dontCome, "nahi aa sakte hen");

//Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Anwar");

//Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

//Adding a New Guest at starting index of array
guestList.unshift("Khizar");

//Adding a new guest at ending index of array
guestList.push("Anus");

//making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "umer");

//print message of update list
console.log("Updated List of our Guests");

//sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`assalamoalaikum ${oneguest}, would you like to dinner with me`));
