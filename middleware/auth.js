/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { secret_key } = require('../config/index');

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. no token provided');
  try {
    const decoded = jwt.verify(token, secret_key);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid Token');
  }
}

const generateAuthToken = async (req, res, next) => {
  const token = jwt.sign({ ...req.body }, secret_key, { algorithm: 'RS256' });
  res.send(token);
  next();
};

module.exports = {
  auth,
  generateAuthToken,
};
