const express = require('express');
// const { authenticate } = require('../middleware/auth');
const addressController = require('./address.controller');

const route = express.Router({ mergeParams: true });

route.get('/', addressController.getAddressList);
route.get('/:id', addressController.getAddressById);
route.post('/add', addressController.addAddress);
route.put('/update/:id', addressController.updateAddress);
route.delete('/delete', addressController.deleteAddress);

module.exports = route;
