// describe a function
function describe_city (city: string, country: string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling the function
describe_city("Karachi");

describe_city("Lahore");

describe_city("Berlin", "germany");
