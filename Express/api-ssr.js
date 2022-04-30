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
    // res.status(200).json(products)
    res.send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    // sending product data
    const newProd = products.map((product) => {
        const {id, name, image} = product;
        return {id, name , image}
    })

    res.json(newProd)
})

// specific products

// wrong approach we have to set up routes for each product.
/*app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)
    res.send(singleProduct);
})*/

// using route parameters in express.
app.get('/api/products/:productID', (req, res) => {
    // logs the product id in the location
    // console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))

    // if user enters anything else than the specified products

    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }

    return res.json(singleProduct)
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000......');
})