const express = require('express');
const router = express.Router();

let products = [{
    id:1,
    name: 'mascara'
},
{
    id:2,
    name: 'lipstick'
}]

router.get('/', (req, res) => {
    res.send(products);
})

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    res.json(product)
})

router.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.json(products);
})

router.put('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id);
    const product = req.body;
    products[productIndex] = product;
    res.json(products);
})

router.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id == req.params.id);
    products.splice(productIndex, 1);
    res.json(products);
})

module.exports = router;