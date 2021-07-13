const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    //id oredr, email client and array objects
    email: {
        type: String,
        required: true,
    },
    items: [
        {
            _id: false,
            id: String,
            qty: Number,
        },
    ],
});

module.exports = mongoose.model('Order', orderSchema);