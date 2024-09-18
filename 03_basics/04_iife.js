// Immediately Invoked Function Expressions (IIFE)


// IIFEs prevent pollution of the global scope.

(function chai(){
    console.log(`DB CONNECTED`);   
})(); // automatic execution

// arrow function
( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
    
})('ROHIT')