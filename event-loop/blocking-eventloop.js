const http = require('http')

const server = http.createServer((res, req) =>{
    req.end("Hello Another Server")
})

server.listen(5000, () => {
    console.log("Listening on port: 5000");
})