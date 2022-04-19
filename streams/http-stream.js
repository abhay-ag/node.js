const http = require('http')
const fs = require('fs')

http.createServer((req, res) =>{
    const text = fs.readFileSync('./content/big.txt', 'utf-8')
    res.end(text)
}).listen(5000)

// problem with the setup
/*
    The request size is very large.
    Large content length
*/