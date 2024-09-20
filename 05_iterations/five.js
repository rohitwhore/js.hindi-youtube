// for each - it takes a callback function as a parameter

const coding = ["js","java","ruby","python","cpp"]

// first way 
coding.forEach( function (item) {
    //console.log(item);   
} )

// second way
coding.forEach( (item) => {
    //console.log(item);   
})

// third way - alag se function bna lo
function printMe(item){
    //console.log(item);   
}

coding.forEach(printMe)

// other variation of for each
coding.forEach((item, index, arr) => {
    //console.log(item,index,arr);  
})

// for each on objects in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})