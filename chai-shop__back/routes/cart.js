const express = require('express');
const router = express.Router();

//models
const ItemsInCart = require('../models/ItemsInCart');

//get items in cart
router.get('/', async (req, res) => {
    try {
        const itemsFromShoppingCart = await ItemsInCart.find();
        res.json(itemsFromShoppingCart);
    } catch (err) {
        res.json({ message: err.message })
    }
});


//create item in cart

router.post('/', async (req, res) => {
    const item = new ItemsInCart({
        title: req.body.item.title,
        price: req.body.item.price,
        image: req.body.item.image,
        qty: 1,
    });
    try {
        const newItem = await item.save()
        res.json(newItem);
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;
