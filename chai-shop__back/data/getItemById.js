const Item = require('../models/Item');
const ItemsInCart = require('../models/ItemsInCart')

module.exports = async function getItemById(id) {
    const itemFromDB = await Item.findById(id);
    return itemFromDB;
}

module.exports = async function getItemByIdFromCart(id) {
    const itemFromCart = await ItemsInCart.findById(id);
    return itemFromCart;
}