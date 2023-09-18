const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    menu_name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
}, {timestamps: true})

//YOU CAN ADD MIDDLEWARE UNDER HERE

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;