const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    menu_name: {
        type: String
    },
    qty: {
        type: Number
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer'
    }
}, {timestamps: true})

//YOU CAN ADD MIDDLEWARE UNDER HERE
cartSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'customer'
    })
    next();
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;