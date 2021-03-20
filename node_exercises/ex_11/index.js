const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/products', function (req, res) {
    res.sendFile(path.join(__dirname, 'products.html'));
})

app.listen(3000);