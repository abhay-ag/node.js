const express = require('express')
const routers = express.Router();

let {people} = require('../../Express/data')


// get method ==> default method the browser performs

// we remove the base from the routers as we have it in the app.js in use
routers.get('/', /* function moved to ./controllers/people.js */)

// javascript form
routers.post('/', )

routers.post('/postman', )


// routers.all('*', (req, res) => {
//     res.status(404).send('Resource not found..')
// })

// put method
routers.put('/:id', )

// delete method
routers.delete('/:id', )

module.exports = routers;