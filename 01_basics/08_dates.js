let myDate = new Date() // Date objects
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23) // Here 0 is first month 23 is date and 2023 is year
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-14-2023") // "MM-DD-YY"
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // in miliseconds
console.log(myCreatedDate.getTime()); // time in miliseconds
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate.getMonth()); // will give current month and in js 0 means january

newDate.toLocaleString('default',{
    weekday: "long",
})