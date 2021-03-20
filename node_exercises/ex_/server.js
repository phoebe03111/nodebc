const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const products = [
    {
        id: 1,
        name: 'Midnight library'
    },
    {
        id: 2,
        name: '7 habits'
    }
]

app.get('/', (req, res) => {
    res.json(products);
})

app.get('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.send('<h1>No product found :( </h1>')
    }

})

app.post('/', (req, res) => {
    const body = req.body;
    products.push(body);
    res.json(body);
})

app.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id)
    //delete products[productIndex];
    products.splice(productIndex, 1);
    res.json(products);
})

app.put('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id)

    res.send(`I'm trying to update a product ID: ${req.params.id}`);
})

app.listen(3000);