// The event loop is what allow node.js to perform non-blocking I/O operations - despite the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible.

/*
    What is single threaded?
    Ans. JS reads everything line by line , hence a time consuming task can hang up all the applications.
        1. setTimeout simply offloads the task.
    
    We execute the necessary code first and the offloaded code is run when we have time left.
*/
const { readfile, readFile } = require('fs')

console.log('started a first task');
// Check file path
readFile('./Built-in-Modules/content/first.txt', 'utf-8', (err,res) => {
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('completed first task');
})
console.log('starting next task');

// if the file system responds back with an error or result then only fire the readFile.