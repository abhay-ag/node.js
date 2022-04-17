const { log } = require('console');
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// uptime of the system in seconds

console.log(`The system uptime: ${os.uptime()} seconds`);

// Important funcitions

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);