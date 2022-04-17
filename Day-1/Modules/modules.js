// Modules in node - every file is a module in node
// Encapsulated code (only share minimum)

// const john = 'john'          // copied to first_module.js
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`Hello there ${name}`);      // copied to utils.js
// }

const names  = require('./first_module')    // importing names
const sayHi = require('./utils')            // importing the function
const data = require('./alternate_method')

console.log(names);     // logs the object with the data passed
console.log(data);

sayHi('Abhay')
// sayHi(john)     // error john is note defined
// sayHi(peter) 
sayHi(names.peter)
sayHi(names.john)

// require without variable

require('./mind-grenade')       // a function inside a module that we invoke then the code will run even the function is not invoked


// benifits of modules:
    /*
        1. declutters files
        2. Diversifies code
    */