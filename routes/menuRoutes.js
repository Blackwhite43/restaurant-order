const express = require("express");
const menuController = require("../controllers/menuController");

const router = express.Router();

router.route('/') // YOU CAN CUSTOMIZE YOUR ROUTE NAME, JUST CHANGE 'route-name' INTO ANYTHING YOU LIKE
    .get(menuController.get_all_menu) // GET, POST, UPDATE, DELETE, etc.
    .post(menuController.insert_menu)
module.exports = router;