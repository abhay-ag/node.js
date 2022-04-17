const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        // Blocking code ==> block the access to about page to all users
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i}, ${j}`);
            }
        }
        res.end('About Page')
    }
    else{
        res.end("Error 404 Not found")
    }
})

server.listen(5000, () => {
    console.log("Listening on port: 5000");
})