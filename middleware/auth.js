/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { secret_key } = require('../config/index');
const { mysqlManager } = require('../manager/index');
const { tokenValidation, emailValidation } = require('../validation/index');

const authenticate = async (req, res, next) => {
  const token = req.header('x-auth-token');
  await tokenValidation.validateAsync({ token });
  if (!token) return res.status(401).send('Access denied. no token provided');
  try {
    const decode = jwt.verify(token, secret_key);
    console.log('=========', decode);
    const conn = await mysqlManager.getConnection();
    const query = `select email from users where email = '${decode.email}'`;
    const [[rows]] = await conn.execute(query);
    console.log('=========', rows);
    if (rows.email) { next(); }
  } catch (err) {
    throw new Error(err);
  }
};

const generateAuthToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await emailValidation.validateAsync({ email, password });
    const token = jwt.sign({ email, password }, secret_key);
    res.send(token);
    next();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  authenticate,
  generateAuthToken,
};
