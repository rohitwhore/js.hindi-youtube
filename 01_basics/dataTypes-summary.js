// Note :- JavaScript is dynamically typed language beacuse we don't 
// need to declare data types of any variables.
// Ex :- const score = true;


// Two Types of data types :- 

// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);



// Reference or Non-Primitive

// Arrays, Objects, Functions

// Arrays
const heroes = ["shaktiman", "Rohit", "captain America"];

// Objects
let myObj = {
    name: "rohit",
    age: 22
}

// Functions

const myFunction = function(){
console.log("Hello world");
}


// Return type of variables in js

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// ************************************************

// Stack (Primitive), Heap (Non-Primitive)


// Understanding Stack
let myName = "Rohit"
let anotherName = myName
anotherName = "Roy" // actual value of myName will not change

console.log(myName); // Rohit
console.log(anotherName); // Roy


// Understanding Heap
let userOne = {
    mail: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.mail = "user2@google.com" // user1 ka v change hoga

console.log(userOne.mail); // user2@google.com
console.log(userTwo.mail); // user2@google.com

