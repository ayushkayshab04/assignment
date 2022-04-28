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
    const query = `select email , password from users where user_id = ${decode.userId}`;
    const [[rows]] = await conn.execute(query);
    if (!rows.email) {
      res.send('unauthorized User!!!!!!!');
    } else {
      next();
    }
  } catch (err) {
    throw new Error(err);
  }
};

const generateAuthToken = async (req, res, next) => {
  const conn = await mysqlManager.getConnection();
  const { id } = req.params;
  const token = jwt.sign(req.body, secret_key);
  const query = `UPDATE users
  SET  token='${token}'
  WHERE user_id=${id};`;
  await conn.execute(query);
  res.send(token);
};

module.exports = {
  authenticate,
  generateAuthToken,
};
