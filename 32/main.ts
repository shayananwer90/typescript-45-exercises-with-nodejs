// array of current users
let current_users = ["shayan", "kashan", "hammad", "eqan", "mubashir"]

// array of new users
let new_users = ["aliyan", "faiq", "aman", "kashif", "lakhani"]

// loop through new_users to check for usernames availability
new_users.forEach(new_one_user =>{

    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is available`)
    }
})