const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.route('/') // YOU CAN CUSTOMIZE YOUR ROUTE NAME, JUST CHANGE 'route-name' INTO ANYTHING YOU LIKE
    .get(cartController.get_all_cart) // GET, POST, UPDATE, DELETE, etc.
    .post(cartController.insert_cart)
module.exports = router;