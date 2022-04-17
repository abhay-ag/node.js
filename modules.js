// Modules in node - every file is a module in node
// Encapsulated code (only share minimum)

const john = 'john'
const peter = 'peter'

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi('Abhay')
sayHi(john)
sayHi(peter)