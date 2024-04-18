// making a function
function make_shirt (size: string = "Large", printMessage: string = "I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function with by-default message
make_shirt();

// calling a function now with medium size and default values
make_shirt("Medium")

//calling a function now with small size and also different print message
make_shirt("small", "I love javascript")