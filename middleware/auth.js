/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { secret_key } = require('../config/index');
const { mysqlManager } = require('../manager/index');

const authenticate = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. no token provided');
  try {
    const decode = jwt.verify(token, secret_key);
    console.log(decode);
    const conn = await mysqlManager.getConnection();
    const query = `select email from users where user_id = '${decode.email}'`;
    const [[rows]] = await conn.execute(query);
    if (!rows.email) { next(); }
  } catch (err) {
    throw new Error(err);
  }
};

const generateAuthToken = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = jwt.sign({ email }, secret_key);
    res.send(token);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  authenticate,
  generateAuthToken,
};
