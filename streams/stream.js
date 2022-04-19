/*
4 TYPES OF STREAMS  ==> used to read or write // big files
    1. writeable
    2. readable
    3. duplex
    4. transform
*/

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');   // passing the path is mandatory

stream.on('data', (result) => {
    console.log(result);
})