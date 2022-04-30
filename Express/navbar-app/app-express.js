const express = require('express')
const path = require('path')
const app = express()

// use static and middleware
app.use(express.static('./public'))    // for easy access of resources || all the static resources

app.get('/', (req, res)=> {
    // use sendFile instead of send
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not Found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on the port 5000.......');
})