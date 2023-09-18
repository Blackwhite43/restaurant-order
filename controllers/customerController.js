const Customer = require('../model/customerModel'); //Import sampleModel from Model folder
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.get_all_customer = factory.getAll(Customer); // factory.(choose_function)(Model)
exports.insert_customer = catchAsync(async (req, res, next) => {
    Customer.create(req.body);
    res.status(200).json({
        status: 'Success'
    })
})