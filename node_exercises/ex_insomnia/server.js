const express = require('express');
const app = express();
app.get('/', (req, res) => {    
    res.send(`<h1>Imagine a very cool product here, you can do it!</h1>`)
})

app.get('/store', (req, res) => {
    res.send("Hello from store");
})

app.get('/store/:id', (req, res) => {
    res.send(`This is the product: ${req.params.id}`);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})