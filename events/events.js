const EventEmitter = require('events')

const customEmmitter = new EventEmitter()
 
// on() listens for specific events 
// emit() will create an event

customEmmitter.on('response', () =>{        // string name should match in the emit function
    console.log(`data recieved `);
})

customEmmitter.emit('response')