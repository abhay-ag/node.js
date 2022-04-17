const { readFile } = require('fs')
const { result } = require('lodash')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, res) => {
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

getText('./Built-in-Modules/content/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))
// Old approach required nesting of readFiles
/*readFile('./Built-in-Modules/content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return
    }else{
        console.log(res);
    }
}))*/