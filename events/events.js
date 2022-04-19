const EventEmitter = require('events')

const customEmmitter = new EventEmitter()
 
// on() listens for specific events 
// emit() will create an event

customEmmitter.on('response', () =>{
    console.log(`data recieved `);
})

customEmmitter.emit('response')