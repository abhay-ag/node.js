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
routers.put('/:id', (req, res) => {
    const { id } = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with id:${id}`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person;
    })
    res.status(200).json({success: true, data: newPeople})
})

// delete method
routers.delete('/:id', (req, res) => {
    const {id} = req.params

    const person = people.find((person) =>  person.id === Number(id))
    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with id:${id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(id))
    res.status(201).json({success: true, data: newPeople})
})

module.exports = routers;