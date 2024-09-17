
// function sayMyName(){
//     console.log("R");
//     console.log("O");
//     console.log("H");
//     console.log("I");
//     console.log("T");
// }

// sayMyName();

// function add(num1, num2){
//     console.log(num1 + num2);
    
// }

// add(2,3)

function add(num1, num2){
    let result = num1 + num2
    return result
    
}

const result = add(2,3)
console.log(result);


function loginuserMessage(username){
    if(username === undefined){ // means if while calling function argument is not passed
        console.log("please enter a username");
        return
    }
    return `${username} just logged In`
}

console.log(loginuserMessage())

// Rest operator - How function takes multiple value

function calculateCartPrice(...num1){ // will return array 
    return num1;
}

console.log(calculateCartPrice(100,200,300,400))

const user = {
    username: "rohit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

// handleObject(user)

// we can also pass objects to function directly
handleObject({
    username: "sam",
    price: 299
})


// passing array as argument
const myNewArray = [200,323,554,654]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,323,554,654]));
