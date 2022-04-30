/*
    middleware are functions that execute during the request to the server each middleware has the access to the response and request objects.
*/

const express = require('express')
const app = express();
const logger = require('./logger')

// req => middleware => res         // sits in between the request and the response

// when working on with middleware we must must pass it onto the next middleware unless terminating the middleware.

// sending it to logger.js

// middleware goes in between the path and callback function

// using function on each route
app.use('/api',logger)         // needs to be placed on top of all app.gets.
// will apply to any path after /api :: eg: /api/home/....

app.get('/', (req, res) => {

    // if we want the same functionality in all the routes then we have to write again and again
    // better solution setting up a function
    
    /*
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url, time);
    */
    res.send('<h1>HOME PAGE</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>ABOUT PAGE</h1>')
})

app.listen(5000, () => {
    console.log('Server listening on the port 5000......');
})