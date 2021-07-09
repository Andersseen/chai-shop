const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//BB.DD
mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a BB.DD'));

//import routes
const itemsRoutes = require('./routes/items');
const imgRoutes = require('./routes/img');

//middelware
app.use(cors());
app.use(express.json())

app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);


//rutas
app.get('/', (req, res) => {
    res.send('home');
});

//start
app.listen(3000)