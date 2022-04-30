const http = require('http')

/*
    no data returned to user
    no headers used
*/

const server = http.createServer((req, res) => {
    // we have to always use end() function
    // console.log('user hit the server');
    console.log(req.method);
    console.log(req.url);

    // the browser knows to render html now
    // provind header/metadata
                //status code  // headers
    res.writeHead(200, {'content-type': 'text/html'})
                                        // html is important to render html else plain text will be rendered
    res.write('<h1>Home page</h1>')
    res.end()
    // must be called on each response
})

server.listen(8000)
// listening point
// 443 for https protocol

/*
    MIME types:

    syntax: text/subtype
*/