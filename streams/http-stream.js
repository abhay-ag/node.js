const http = require('http')
const fs = require('fs')

http.createServer((req, res) =>{
    // Problem setup
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)

    // New setup

    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res)   // pushing from the readstream to the writestream
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)

// problem with the setup
/*
    The request size is very large.
    Large content length
*/

// new setup headers ==> chunks`
