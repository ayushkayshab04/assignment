/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const { mysqlManager } = require('../manager/index');

const register = async ({
  firstName, LastName, email, phoneNo, userType,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO ayush.users
  (first_name, last_name, email, phone_no, user_type)
  VALUES('${firstName}', '${LastName}', '${email}', '${phoneNo}', '${userType}')`;
  await conn.execute(query);
};

module.exports = {
  register,
};
