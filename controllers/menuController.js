const Menu = require('../model/menuModel'); //Import sampleModel from Model folder
const factory = require('./handlerFactory');

exports.get_all_menu = factory.getAll(Menu); // factory.(choose_function)(Model)
exports.insert_menu = factory.createOne(Menu);