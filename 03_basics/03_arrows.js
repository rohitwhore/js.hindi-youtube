const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// ** this do not works in functions

// function chai(){
//     let username = "rohit"
//     console.log(this.username) // this will not work
// }

// chai()

// ARROW FUNCTION

const chai = () => {
    let username = "rohit"
    console.log(this)
}

// chai()

// BASIC ARROW FUNCTION OR EXPLICIT RETURNED

// const addTwo =  (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// IMPLICIT RETURNED -> remove curly bracket and return statement

// const addTwo =  (num1, num2) =>  (num1 + num2)

const addTwo =  (num1, num2) =>  ({username:"rohit"}) // returning object

console.log(addTwo(3,4));
