const Menu = require('../model/menuModel'); //Import sampleModel from Model folder
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.get_all_menu = factory.getAll(Menu); // factory.(choose_function)(Model)
exports.insert_menu = catchAsync(async (req, res, next) => {
    Menu.create(req.body);
    res.status(200).json({
        status: 'Success'
    })
})