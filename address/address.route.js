const express = require('express');
const { authenticate } = require('../middleware/auth');
const addressController = require('./address.controller');

const route = express.Router({ mergeParams: true });

route.get('/', authenticate, addressController.getAddressList);
route.get('/:id', authenticate, addressController.getAddressById);
route.post('/add', authenticate, addressController.addAddress);
route.put('/update/:id', authenticate, addressController.updateAddress);
route.delete('/delete', authenticate, addressController.deleteAddress);

module.exports = route;
