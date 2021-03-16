const http = require('http');
const port = 3001;

const requesthandler = (request, response) => {
    response.end('Congrats you\'re using your first Node.js Web Server');
}

const server = http.createServer(requesthandler);

server.listen(port, (err) => {
    if (err) {
        return console.log(`Unable to start the server on port ${port}`);
    }
    console.log(`The HTTP server is running on port ${port}`);
})
