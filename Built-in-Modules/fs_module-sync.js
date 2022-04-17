// two ways Async and Sync

// Synchronous
const {readFileSync, writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./Built-in-Modules/content/first.txt', 'utf-8')
const second = readFileSync('./Built-in-Modules/content/second.txt', 'utf-8')

console.log(first, second);

// arguments = <path>, <content> <flag: >
writeFileSync('./Built-in-Modules/content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a'})

console.log('end');