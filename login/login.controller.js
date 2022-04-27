/* eslint-disable no-unused-vars */

const candidateService = require('./login.service');

const candidateRegistration = async (req, res) => {
  try {
    const {
      firstName, LastName, email, phoneNo, userType,
    } = req.body;
    await candidateService.register({
      firstName, LastName, email, phoneNo, userType,
    });
    res.send('User created sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (req, res) => {

};

module.exports = {
  candidateRegistration,
  login,
};
