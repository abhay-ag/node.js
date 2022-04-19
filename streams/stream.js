/*
4 TYPES OF STREAMS  ==> used to read or write // big files
    1. writeable
    2. readable
    3. duplex
    4. transform
*/

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'});   // passing the path is mandatory

// by default the size of buffer is 64 kb
// output last buffer - remainder
// highWaterMark --> control size

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})