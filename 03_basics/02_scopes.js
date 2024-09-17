// global scope
let a = 300

// block scope
if(true){
    let a = 10
    const b = 20
}

// console.log(a);
// console.log(b);

// nested scope
function one(){
    const username = "rohit"

    function two(){
        const website = "youtube"
        console.log(username);       
    }
    //console.log(website); // cannot access website here
    two()
}

one()

if(true){
    const username = "rohit"
    if(username === "rohit"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website); // not accesible
    
}

// console.log(username); // not accesible



// ********************* Interesting Concept ************************

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)