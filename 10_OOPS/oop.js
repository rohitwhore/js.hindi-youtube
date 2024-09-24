// object literals
const user = {
    username: "Rohit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`username: ${this.username}`);    
        console.log(this);       
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

// constructor
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);    
    }

    return this // exception.
}

const userOne = new User("Rohit", 12, true)
console.log(userOne);
const userTwo = new User("Hitesh", 5, true)
console.log(userTwo);

