const express = require('express')
const app = express();

const morgan = require('morgan')
// using morgan

app.use(morgan('tiny'))

app.get('/',(req, res) => {
    res.send('HOME')
})

app.get('/about', (req, res) => {
    res.send('ABOUT')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000..... ');
})