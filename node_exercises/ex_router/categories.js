const express = require('express');
const router = express.Router();

let categories = [{
    id: 1,
    name: 'beauty'
},
{
    id: 2,
    name: 'books'
}]

router.get('/', (req, res) => {
    res.json(categories)
})

router.get('/:id', (req, res) => {
    const category = categories.find(p => p.id == req.params.id)
    res.json(category)
})

router.post('/', (req, res) => {
    const category = req.body;
    categories.push(category);
    res.json(categories);
})

router.put('/:id', (req, res) => {
    const categoryIndex = categories.findIndex(p => p.id == req.params.id);
    const category = req.body;
    categories[categoryIndex] = category;
    res.json(categories);
})

router.delete('/:id', (req, res) => {
    const categoryIndex = categories.findIndex(p => p.id == req.params.id);
    categories.splice(categoryIndex, 1);
    res.json(categories);
})

module.exports = router;