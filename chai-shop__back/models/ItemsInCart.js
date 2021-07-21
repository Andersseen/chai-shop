const mongoose = require('mongoose');

const itemCartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('ItemsInCart', itemCartSchema);