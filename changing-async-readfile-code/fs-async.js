const { readFile, writeFile } = require('fs')
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

// getText('./Built-in-Modules/content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
// ===== STILL HECTIC =====


const rFile = util.promisify(readFile)
const wFile = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await rFile('./Built-in-Modules/content/first.txt', 'utf-8')         // waiting the promise to be resolved
        const second = await rFile('./Built-in-Modules/content/second.txt', 'utf-8')

        await wFile('./Built-in-Modules/content/easy-fs-async.txt', `Promisify is the easiest way of async fs.readFile and fs.writeFile`)

        console.log(first, second);
    }
    catch (error){
        console.log(error);
    }
}

start()