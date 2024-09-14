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