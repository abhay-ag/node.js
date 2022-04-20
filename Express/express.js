const http = require('http')

const server = http.createServer((req, res) => {
    // we have to always use end() function
    console.log('user hit the server');
    res.end("<h1>Hello User</h1>")
})

server.listen(8000)
// listening point
// 443 for https protocol