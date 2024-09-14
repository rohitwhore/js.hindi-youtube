// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // will convert "2" into a number and will return true
console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2); // strict check. so it will not convert "2" into a number.Data types will also be checked

console.log("2" === "3");
