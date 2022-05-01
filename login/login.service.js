/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

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

// const login = async (req, res) => {
//   res.send("Login sucessfull");
// };

module.exports = {
  register,
  // login,
};
