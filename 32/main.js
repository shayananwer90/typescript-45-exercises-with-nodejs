// array of current users
var current_users = ["shayan", "kashan", "hammad", "eqan", "mubashir"];
// array of new users
var new_users = ["aliyan", "faiq", "aman", "kashif", "lakhani"];
// loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
