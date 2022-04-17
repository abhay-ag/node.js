const { readFile, writeFile, write } = require('fs')

// parameters: <path> <encoding> <callback>
console.log('start');
readFile('./Built-in-Modules/content/first.txt','utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return
    }
    // console.log(result);                // result can be only accessed in this function
    const first = result;
    readFile('./Built-in-Modules/content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./Built-in-Modules/content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');