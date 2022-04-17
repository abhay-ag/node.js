const { readFile } = require('fs')

readFile('./Built-in-Modules/content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return
    }else{
        console.log(res);
    }
})