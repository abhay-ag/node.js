const http = require('http')

//  Old Way of creating a server

// const server = http.createServer((req, res) => {
//     res.end("Welcome")
// })


// Second way of creating a server

// Using event emitter API
const server = http.createServer()
// Emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(80);