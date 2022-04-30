const http = require('http')
const {readFileSync} = require('fs');
const { writeHeapSnapshot } = require('v8');
const { log } = require('console');

const homePage = readFileSync('./navbar-app/index.html')
// problem : we have to get each and every resource as the borwser puts up reqest for all the paths or links in the html file
const homeStyle = readFileSync('./navbar-app/style.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


// big code is used

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end();
    }else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end();
    }else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end();
    }else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end();
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not Found</h1>')

        res.end();
    }
}).listen(5000)