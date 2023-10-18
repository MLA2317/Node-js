// events - bu dasturda ishora etganda events boladi

// import { EventEmitter } from 'node:events';
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('messageLogged', (arg) => {
//     console.log('Listened chaqirildi.', arg);
// })

// emitter.emit('messageLogged', {id: 1, url: 'http://...'}) // emit - biron bir hodisa boldi db habar beradi



// EventEmitter samarali foydalanish
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener chaqirildi.', arg);
})

logger.log('message')