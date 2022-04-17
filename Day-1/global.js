// Global - not window based

/*
    __dirname = path to current directory
    __filename = file name
    require = function to use modules(CommonJS)
    moudule = info about current module (file)
    process = info about env where the program is being executed
*/

console.log(__dirname);

setInterval(() => {
    console.log("Hello World");
}, 1000)