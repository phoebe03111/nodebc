const express = require('express');
const bodyParser = require('body-parser');

const homeRoutes = require('./home');
const userRoutes = require('./user');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.listen(port);

