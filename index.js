const Logger = require('./logger');
const http = require('http');
const logger = new Logger();
logger.on('OnMessage', (args) => {
    console.log('Listener Called', args);
});
logger.log('message');
const server = http.createServer((req, res) => {
    console.log(req);
    res.end();
});
server.listen(3000);