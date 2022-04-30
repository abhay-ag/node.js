// API vs SSR

/*
    1. API is JSON
    2. Send Data
    3. RES.JSON()       ==> sending data

    1. SSR is template
    2. Send template
    3. RES.RENDER()     ==> redering data
*/

// most basic api

const express = require('express')
const app = express();

const { products, people } = require('./data')

// sending json data
app.get('/', (req, res) => {
    res.status(200).json(products)
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000......');
})