const http = require('http')

// console.log(http);

// creating a server
const server = http.createServer((req, res) => {
    // console.log(req); logs a big object
    if(req.url === '/'){
        res.end("Hello User!")
    }else if(req.url === '/about'){
        res.end("Here is our short history")
    }else{
        res.end(`<h1>OOPS!</h1><a href = '/'>Go to Home Page</a>`)
    }
    // res.write('Welcome to our homepage')
    // res.end()
})

// Assigning server port
server.listen(8888)