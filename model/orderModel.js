const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    menu_name: {
        type: Array
    },
    qty: {
        type: Array
    },
    order_status: {
        type: String,
        enum: {
            values: ["Order Received", "On Process", "Finished"]
        },
        default: "Order Received"
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer'
    }
}, {timestamps: true})

//YOU CAN ADD MIDDLEWARE UNDER HERE
orderSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'customer'
    })
    next();
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;