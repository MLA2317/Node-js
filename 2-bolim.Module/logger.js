// const url = 'http://192.168.7.1/logger';

// function log(message){
//     // to-do: buyerda message'ni url ga http post qilib jo'natish kodi bo'lishi kerak
//     console.log(message); 
// }

// yengi modul qo'shish
// module.exports = log;
// module.exports.endPoint = url;



// EventEmitter
const url = 'http://192.168.7.1/logger';
const EventEmitter = require('events');

// hodisalar bn ishlamoqchi bolsa class bn ishlash yaxshiroq
class Logger extends EventEmitter {
    log(message){
        console.log(message)
        this.emit('messageLogged', {id: 1, url: 'http://....'});
    }
}

module.exports = Logger; 






