const http = require('http');
const app = require('./lib/app');
require('mongoose');

require('./lib/connection');

const server = http.createServer(app);
const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log('server is running on ', server.address());
});