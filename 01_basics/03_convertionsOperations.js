let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)  // convertion to number format
console.log(typeof valueInNumber); // converted string to number

console.log(valueInNumber); // convert to ho gya number type me but output ayega NAN


// "33" => will be converted to number 33
// "33abc" => type will be changed to number but will print NaN
// "rohit" => will give NaN
// true => will give 1
// null => will give 0
// undefined => will give undefined

let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn) // convertion to boolean format
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "rohit" => true

let someNumber = 33

let stringNumber = String(someNumber) // convertion to string format
console.log(stringNumber);