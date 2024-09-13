const accountId = 144553
let accountEmail = "rohit272@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2 // not allowed
accountEmail = "bh@hc.com"
accountPassword = "234"
accountCity = "Bokaro"

console.log(accountId);

/*
prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);