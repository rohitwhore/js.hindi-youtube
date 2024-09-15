const score = 200
console.log(score);

const balance = new Number(100) // creates a new Number object with value 100
console.log(balance);

console.log(balance.toString().length); // number converted to string
console.log(balance.toFixed(2));

const otherNumber = 123.8938

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ****************** Maths ********************

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(4.3)); // round off
console.log(Math.ceil(4.2)); // ceiling value
console.log(Math.floor(4.9)); // Floor value
console.log(Math.min(4,5,6,8));
console.log(Math.max(4,5,6,8));

let value = Math.random();
let v = Math.floor(value * 10) + 1;
console.log(v);

// suppose a range is given 

const min = 10
const max = 20

const ans = Math.floor(Math.random() * (max - min + 1)) + min
console.log(ans);
