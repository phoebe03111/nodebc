const express = require('express');
const router = express.Router();

let users = [{
    id:1,
    name: 'Amy'
},
{
    id:2,
    name: 'Jonah'
}]

router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res) => {
    const user = users.find(p => p.id == req.params.id)
    res.json(users)
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(users);
})

router.put('/:id', (req, res) => {
    const userIndex = users.findIndex(p => p.id == req.params.id);
    const user = req.body;
    users[userIndex] = user;
    res.json(users);
})

router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(p => p.id == req.params.id);
    users.splice(userIndex, 1);
    res.json(users);
})

module.exports = router;
