const express = require('express');
const bodyParser = require('body-parser');

const homeRoutes = require('./home');
const productRoutes = require('./products');
const categoryRoutes = require('./categories');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', homeRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port);