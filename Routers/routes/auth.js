const express = require('express')
const router = express.Router();

let {people} = require('../../Express/data')

router.post('/', (req, res) => {
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

module.exports = router;