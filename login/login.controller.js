/* eslint-disable no-unused-vars */

const userService = require('./login.service');

const userRegistration = async (req, res) => {
  try {
    const {
      firstName, lastName, email, phoneNo, password,
    } = req.body;
    await userService.register({
      firstName, lastName, email, phoneNo, password,
    });
    res.send('User created sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (req, res) => {
  try {
    await userService.login(req, res);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  userRegistration,
  login,
};
