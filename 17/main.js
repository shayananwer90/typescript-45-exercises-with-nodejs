//creating a Guest List Array
var guestList = ["Shayan", "Kashan", "Mubashir", "Aliyan"];
//making variable for those guest who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "umer");
//print message of update list
console.log("Updated List of our Guests");
//sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("assalamoalaikum ".concat(oneguest, ", would you like to dinner with me")); });
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
//using while-loop to remove guests from the arrayuntil only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
//sending a invitation to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
