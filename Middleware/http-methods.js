const express = require('express')
const app = express()

let {people} = require('../Express/data')

// static assests
app.use(express.static('/methods-public'))

// get method ==> default method the browser performs
app.get('/api/people', (req, res)=> {
    res.status(200).json({success: true, data: people})
})

// app.all('*', (req, res) => {
//     res.status(404).send('Resource not found..')
// })

app.listen(5000, () => {
    console.log('Server listening on the port 5000.....');
})