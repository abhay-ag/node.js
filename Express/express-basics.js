const express = require('express');
const app = express();

// calback function called everytime when user requests home page
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

// setting up a xustom 404 response
app.all('*', (req, res) => {
    res.send('Resource not found')
})

app.listen(5000, () => {
    console.log('server listening');
})

// methods of express
/*
    app.get
    app.post

    app.put
    app.delete

    app.all
    app.use     // middleware usage
    app.list
    app.listen
*/