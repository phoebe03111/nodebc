const express = require('express');
const app = express();
const port = 3000;

var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
var getRandomJoke2 = oneLinerJoke.getRandomJoke();

app.get('/', function (req, res) {
    res.send('Welcome to my exercise 10!');
})

app.get('/jokes', function (req, res) {
    res.send(getRandomJoke.body + getRandomJoke2.body);
})

app.get('/joke', function (req, res) {
    res.send(getRandomJoke.body);
})

app.post('/joke', function (req, res) {
    res.send('My jokes are too funny, I\'m not getting new ones from you...');
})

app.put('/joke', function (req, res) {
    res.send('No, no, no...not changing my act dude!');
})

app.delete('/joke', function (req, res) {
    res.send('Good jokes never get old');
})

app.all('/joke', function (req, res) {
    res.send('I know I \'m so good that you\'re looking for jokes everywhere');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})