const express = require('express')
const routers = express.Router();

// get method ==> default method the browser performs
routers.get('/api/people', (req, res)=> {
    res.status(200).json({success: true, data: people})
})

// javascript form
routers.post('/api/people', (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, msg: 'please provide a name'})
    }
    res.status(201).json({success: true, person: name})
})

routers.post('/api/people/postman', (req, res) => {
    const {name} = req.body

    if(!name){
        return res
            .status(400)
            .json({success: false, msg: 'Please provide a name'})
    }
    // joining the provided name and the old people array
    res.status(201).send({success: true, data: [...people, name]})
})


// routers.all('*', (req, res) => {
//     res.status(404).send('Resource not found..')
// })

// put method
routers.put('/api/people/:id', (req, res) => {
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
routers.delete('/api/people/:id', (req, res) => {
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