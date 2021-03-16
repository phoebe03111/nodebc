const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send('Congrats you\'re using your first Node.js and Express as Web Server');
})

const port = 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(`Unable to start the server on port ${port}`);
    }
    console.log(`The HTTP server is running on port ${port}`);
})