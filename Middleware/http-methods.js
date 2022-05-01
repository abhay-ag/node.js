const express = require('express')
const app = express()

let {people} = require('../Express/data')

// static assests
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended: false}))

// parse the incoming json data ==> javascript form
app.use(express.json())

// get method ==> default method the browser performs
app.get('/api/people', (req, res)=> {
    res.status(200).json({success: true, data: people})
})

// javascript form
app.post('/api/people', (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, msg: 'please provide a name'})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body

    if(!name){
        return res
            .status(400)
            .json({success: false, msg: 'Please provide a name'})
    }
    // joining the provided name and the old people array
    res.status(201).send({success: true, data: [...people, name]})
})

// post method
app.post('/login', (req, res) => {
    // console.log(req.body);

    const {name} = req.body;
    let flag = false;
    for (let i = 0; i < people.length; i++){
        if(name === people[i].name){
            flag = true;
        }
    }
    if(flag){
        return res.status(200).send(`Hello, ${name}`)
    }else{
        return res.status(401).send('User not found..')
    }
})

// app.all('*', (req, res) => {
//     res.status(404).send('Resource not found..')
// })

// put method
app.put('/api/people/:id', (req, res) => {
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


app.listen(5000, () => {
    console.log('Server listening on the port 5000.....');
})