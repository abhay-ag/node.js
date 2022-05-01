const express = require('express')
const routers = express.Router();

const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../controllers/people')


// get method ==> default method the browser performs

// we remove the base from the routers as we have it in the app.js in use
routers.get('/', getPeople /* function moved to ./controllers/people.js */)

// javascript form
routers.post('/', createPerson)

routers.post('/postman', createPersonPostman)


// routers.all('*', (req, res) => {
//     res.status(404).send('Resource not found..')
// })

// put method
routers.put('/:id', updatePerson)

// delete method
routers.delete('/:id', deletePerson)

module.exports = routers;