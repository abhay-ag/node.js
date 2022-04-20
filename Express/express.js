const http = require('http')

/*
    no data returned to user
    no headers used
*/

const server = http.createServer((req, res) => {
    // we have to always use end() function
    // console.log('user hit the server');

    // the browser knows to render html now
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Home page</h1>')
    res.end()
})

server.listen(8000)
// listening point
// 443 for https protocol

/*
    MIME types:

    syntax: text/subtype
*/