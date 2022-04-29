/* eslint-disable no-unused-vars */
const addressService = require('./address.service');
const { idValidation, addressValidation } = require('../validation/validation');

const getAddressList = async (req, res) => {
  try {
    const addressList = await addressService.getAddressList();
    res.send(addressList);
  } catch (err) {
    throw new Error(err);
  }
};

const getAddressById = async (req, res) => {
  try {
    const { id } = req.parms;
    await idValidation.validateAsync({ id });
    const addressById = await addressService.updateAddress(id);
    res.send(addressById);
  } catch (err) {
    throw new Error(err);
  }
};

const addAddress = async (req, res) => {
  try {
    const {
      userId, addressLine1, addressLine2, city, state, zip,
    } = req.body;
    await addressValidation.validateAsync(req.body);
    await addressService.addAddress({
      userId, addressLine1, addressLine2, city, state, zip,
    });
    res.send('Address added Sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId, addressLine1, addressLine2, city, state, zip,
    } = req.body;
    await idValidation.validateAsync({ id });
    await addressValidation.validateAsync(req.body);
    await addressService.updateAddress({ id }, {
      userId, addressLine1, addressLine2, city, state, zip,
    });
    res.send('address updated Scucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync({ id });
    await addressService.deleteAddress({ id });
    res.send('Address Deleted Sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAddressList,
  getAddressById,
  addAddress,
  updateAddress,
  deleteAddress,
};
