const express = require('express');
const router = express.Router();

//models
const Item = require('../models/Item');

//get items
router.get('/', async (req, res) => {
    try {
        const itemsFromDB = await Item.find();
        console.log(itemsFromDB);
        res.json(itemsFromDB);
    } catch (err) {
        res.json({ message: err.message })
    }
});

//create item

router.post('/', async (req, res) => {
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
    });
    try {
        const newItem = await item.save();
        res.json(newItem);
    } catch (err) {
        res.json({ message: err.message });
    }
});


module.exports = router;
