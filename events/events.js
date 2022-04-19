const EventEmitter = require('events')

const customEmmitter = new EventEmitter()
 
// on() listens for specific events 
// emit() will create an event

customEmmitter.on('response', (name, idNum) =>{        // string name should match in the emit function
    console.log(`data recieved ${name}: ${idNum}`);
})

// We can have multiple on() with same event name with different functionality.
// order matters

/*
    First we have to listen for an event.
    Second we have to emit the event.
*/

customEmmitter.emit('response', 'john', 34) // we can pass data also.