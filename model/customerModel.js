const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    nama: {
        type: String
    },
    no_telepon: {
        type: String
    },
    meja: {
        type: Number
    }
}, {timestamps: true})

//YOU CAN ADD MIDDLEWARE UNDER HERE

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;