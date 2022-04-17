const { readFile } = require('fs')
const util = require('util')
// Old approach required nesting of readFiles
/*readFile('./Built-in-Modules/content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return
    }else{
        console.log(res);
    }
}))*/

// This approach still hectic as we have to use a wrapper function
// So we use promisify function from util
/*const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, res) => {
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}*/

const rFile = util.promisify(readFile)

// ===== STILL HECTIC =====
// getText('./Built-in-Modules/content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


const start = async() => {
    try{
        const first = await getText('./Built-in-Modules/content/first.txt')         // waiting the promise to be resolved
        const second = await getText('./Built-in-Modules/content/second.txt')
        console.log(first, second);
    }
    catch (error){
        console.log(error);
    }
}

start()