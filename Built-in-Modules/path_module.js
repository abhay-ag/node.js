const path = require('path')

// separator property
console.log(path.sep);

// join file path

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// basename
const base = path.basename(filePath)
console.log(base);

// resolve function
const absolute = path.resolve(__dirname, 'content' , 'subfolder', 'test.txt')
console.log(absolute);