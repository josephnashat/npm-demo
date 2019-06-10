const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message){
        console.log(message);
        this.emit('OnMessageLogged', {id:1, url: 'http://'});
    }
}

module.exports = Logger;