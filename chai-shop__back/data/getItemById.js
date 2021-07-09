const Item = require('../models/Item');

module.exports = async function getItemById(id) {
    const itemFromDB = await Item.findById(id);
    return itemFromDB;
}