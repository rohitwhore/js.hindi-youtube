const name = "Rohit"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('rohit-roy-com')

console.log(gameName[0]);
console.log(gameName.__proto__); // printing prototypes

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // 4 is excluded
console.log(newString);

const anotherString1 = gameName.slice(0, 4)
console.log(anotherString1);

const anotherString2 = gameName.slice(-8, 4) // will start from back side
console.log(anotherString2);

const newStringOne = "   rohit   "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes starting and ending spaces

const url = "https://rohit.com/rohit%20roy"

console.log(url.replace('%20','-'))

console.log(url.includes('rohit')) // returns true

console.log(gameName.split('-')); // returns array 
