const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.route('/') // YOU CAN CUSTOMIZE YOUR ROUTE NAME, JUST CHANGE 'route-name' INTO ANYTHING YOU LIKE
    .get(customerController.get_all_customer) // GET, POST, UPDATE, DELETE, etc.
    .post(customerController.insert_customer)
module.exports = router;