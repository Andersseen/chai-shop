const express = require('express');
const app = express();
const cors = require('cors')

//mock
const itemsMock = require('./mock/items.json');

//middelware
app.use(cors())

//rutas
app.get('/', (req, res) => {
    res.send('home');
})

//items
app.get('/items', (req, res) => {
    res.send(itemsMock);
})

//images
app.get('/img/:imgName', (req, res) => {
    const image = req.params.imgName;
    res.sendFile(`${__dirname}/img/${image}`)
});

//start
app.listen(3000)