const addressService = require('./address.service');
const addressController = require('./address.controller');
const addressRoute = require('./address.route');

module.exports = {
  addressController,
  addressRoute,
  addressService,
};
