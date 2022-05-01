const express = require('express')
const app = express()

// static assests
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse the incoming json data ==> javascript form
app.use(express.json())

const people = require('./routes/people')

app.use('/api/people', people)
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

// one route for login, rest all are /api/people...
// goto /routes/people.js

app.listen(5000, () => {
    console.log('Server listening on the port 5000.....');
})