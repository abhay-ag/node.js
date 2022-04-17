// two ways Async and Sync

// Synchronous
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./Built-in-Modules/content/first.txt', 'utf-8')
const second = readFileSync('./Built-in-Modules/content/second.txt', 'utf-8')

console.log(first, second);

writeFileSync('./Built-in-Modules/content/result-sync.txt', `Here is the result: ${first}, ${second}`)