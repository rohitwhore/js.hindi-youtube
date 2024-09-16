const myArr1 = [2, 4, 5, 6]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr1[0]);


// Array Methods

myArr1.push(7) // adds to end
console.log(myArr1);

myArr1.pop() // removes last value
console.log(myArr1);

myArr1.unshift(1) // adds to start
console.log(myArr1);

myArr1.shift() // deletes from start
console.log(myArr1);

console.log(myArr1.includes(4));
console.log(myArr1.indexOf(3));

const newArr = myArr1.join() // converts object type(array) to string type

console.log(myArr1); // this is object form
console.log(newArr); 

