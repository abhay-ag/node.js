const express = require('express')
const app = express()

// static assests
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse the incoming json data ==> javascript form
app.use(express.json())

const people = require('./routes/people')
const auth = require('./routes/auth')

app.use('/api/people', people)
app.use('/login', auth)


// one route for login, rest all are /api/people...
// goto /routes/people.js
// goto /routes/auth.js

app.listen(5000, () => {
    console.log('Server listening on the port 5000.....');
})