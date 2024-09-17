// Methods for Defining JavaScript Objects

// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()

// Object Literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Rohit",
    "full name": "Rohit Roy", // cannot access this through dot method
    [mySym]: "myKey1", // symbols are used like this in objects
    age: 22,
    location: "Bokaro",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
// console.log(Jsuser."full name"); // wrong
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]); // symbols are accessed like this

Jsuser.email = "roy@gmail.com"
// Object.freeze(Jsuser) // No changes can be done to jsuser object anymore

Jsuser.greeting = function(){
    console.log("Hello js user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());