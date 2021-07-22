const express = require('express');
const router = express.Router();

const getItemByIdFromCart = require('../data/getItemById');

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

//delete item in cart

router.post('/item', async (req, res) => {
    const itemId = req.body.item._id
    try {
        const itemFromCart = await getItemByIdFromCart(itemId);
        itemFromCart.delete()
    } catch (err) {
        res.json({ message: err.message })
    }
});

module.exports = router;
