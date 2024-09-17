//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Rohit",
            lastName: "Roy"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2} // will give objects in object
//const obj3 = Object.assign({},obj1,obj2) // {} is a target and rest are source

const obj3 = {...obj1, ...obj2} // same like array
console.log(obj3); 


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 2,
        email: "hdwe@gmail.com"
    },

    {
        id: 3,
        email: "sghdw@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys are kept in array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
