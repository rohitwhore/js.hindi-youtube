// for of loop

// on arrays
const arr = [1,2,3,4,5]

for (const element of arr) {
    // console.log(element);  
}

// on strings
for(char of "rohit"){
    // console.log(char);   
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")

//console.log(map);

// for of in maps
for(const [key, value] of map){
    console.log(key, ':-', value);
    
}

// for of loop in objects
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {  // not work
//      console.log(key, ':-', value)      
// }