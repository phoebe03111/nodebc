const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('public'));

app.get('/', (req,res) => {
    res.send('Hello from the other side')
})

app.listen(port);