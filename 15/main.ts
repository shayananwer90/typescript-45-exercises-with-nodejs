let guestList = ["Shayan","Kashan","Mubashir","Aliyan"];

let dontCome = guestList[0];

console.log(dontCome, "nahi aa sakta");

guestList.splice(0, 1, "Anwar");

guestList.forEach(guest => console.log(`assalamoalaikum ${guest}, would you like to dinner with me?`));
