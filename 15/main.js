var guestList = ["Shayan", "Kashan", "Mubashir", "Aliyan"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa sakta");
guestList.splice(0, 0, "Anwar");
guestList.forEach(function (guest) { return console.log("assalamoalaikum ".concat(guest, ", would you like to dinner with me?")); });
