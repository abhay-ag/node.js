const http = require('http')

const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./index.html')

/*
    no data returned to user
    no headers used
*/

const server = http.createServer((req, res) => {
    // we have to always use end() function
    // console.log('user hit the server');

    // req methods
    // console.log(req.method);
    // console.log(req.url);

    const url = req.url;

    if(url === '/'){
        // home page
        // the browser knows to render html now
        // provind header/metadata
                    //status code  // headers
        res.writeHead(200, {'content-type': 'text/html'})
                                            // html is important to render html else plain text will be rendered
        // res.write('<h1>Home page</h1>')
        res.write(homePage)     // using html as the write method
        res.end()
        // must be called on each response
    }else if(url === '/about'){
        // about page

        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else{
        //resource not found - 404
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')

        res.end()
    }
})

server.listen(8000)
// listening point
// 443 for https protocol

/*
    MIME types:

    syntax: text/subtype
*/