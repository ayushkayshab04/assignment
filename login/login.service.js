/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const res = require('express/lib/response');
const { mysqlManager } = require('../manager/index');

const register = async ({
  firstName, lastName, email, phoneNo, password,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO ayush.users
  (first_name, last_name, email, phone_no, password)
  VALUES('${firstName}', '${lastName}', '${email}', '${phoneNo}', '${password}')`;
  await conn.execute(query);
};

const login = async () => {
  res.send("Login Sucessfull");
};

module.exports = {
  register,
  login,
};
