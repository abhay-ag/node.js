const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Request Event');
    res.end('Server Created')
})

server.listen(2200, () => {
    console.log("Server listening on port: 2200");
})

// process stays alive because server is async.