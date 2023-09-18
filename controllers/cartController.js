const Cart = require('../model/cartModel'); //Import sampleModel from Model folder
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.get_all_cart = factory.getAll(Cart); // factory.(choose_function)(Model)
exports.insert_cart = catchAsync(async (req, res, next) => {
    Cart.create(req.body);
    res.status(200).json({
        status: 'Success'
    })
})