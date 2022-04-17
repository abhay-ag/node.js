const http = require('http')

// console.log(http);

// creating a server
const server = http.createServer((req, res) => {
    res.write('Welcome to our homepage')
    res.end()
})

// Assigning server port
server.listen(8888)