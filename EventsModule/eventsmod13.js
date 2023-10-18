// Events Module

// NodeJS has a built-in module, called 'Events'.
// Where you can create-, fire-, and listen for- your own events.
// Objects in Nodejs can fire events, all event properties and method are instance of EventEmitter object.
// To access prop and method, create EventEmitter object.

// Ex-1. Register for the event to be fired only one time using once.
{
    const events = require('events')                     // import events module
    const eventEmitter = new events.EventEmitter()       // import EventEmitter Object for their properties and methods like- 'on', 'emit'

    const myname = () => {                               // Create an arrow function (Event Handler)
        console.log('i am function')
    }

    eventEmitter.on('scream', myname)                    // Assign or register or create the arrow function (Event Handler) to an event ('scream') with 'on' method
    eventEmitter.emit('scream')                          // Fire the event 'scream'
}


// Ex-2. Create an event emitter instance and register a couple of callbacks.
{
    const events = require('events')
    const eventEmitter = new events.EventEmitter()

    eventEmitter.on('scream', () => {
        console.log('i am function10')
    })

    eventEmitter.on('scream', () => {
        console.log('i am function20')
    })

    eventEmitter.on('scream', () => {
        console.log('i am function30')
    })

    eventEmitter.emit('scream')
}


// Ex-3. Registering for the event with callback parameters.
{
    const events = require('events')
    const eventEmitter = new events.EventEmitter()

    eventEmitter.on('scream', (statuscode, msg) => {
        console.log(`i am function40 with parameters, statuscode is ${statuscode} and the page message is ${msg}`)
    })

    eventEmitter.emit('scream', 200, 'OKAY')
}
