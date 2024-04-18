// creating a array
let userNames = ["shayan", "hammad", "mubashir", "admin", "aliyan"];

// using foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "admin"){
        console.log(`hello ${oneUser}, would you like to see a status report?`)
    }{
        console.log(`hello ${oneUser}, thank you for logging in again.`)
    }
})