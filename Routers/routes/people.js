const express = require('express')
const routers = express.Router();

const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../controllers/people')


routers.get('/', getPeople /* function moved to ./controllers/people.js */)
routers.post('/', createPerson)
routers.post('/postman', createPersonPostman)
routers.put('/:id', updatePerson)
routers.delete('/:id', deletePerson)

module.exports = routers;