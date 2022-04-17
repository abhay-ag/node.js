/*
    when node is installed npm is installed automatically 
    npm
    npm --version

    local dependency - uses it only in the current specified project
    npm i <package name>

    global dependency - use it in any project
    npm install -g <package name>
    sudo install -g <package name> [mac and linux]
*/

/*
    package.json - manifest file (stores important info about project/packages)

    Contains all the information about dependencies.

    Steps to create:
        1. manual approach (create package.json in the root, create properties etc)
        2. npm init (step by step, press enter to skip)
        3. npm init -y (everything default)
*/

const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);