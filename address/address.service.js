/* eslint-disable no-console */
const { mysqlManager } = require('../manager/index');

const getAddressList = async () => {
  const conn = await mysqlManager.getConnection();
  const query = 'select * from address';
  const [rows] = await conn.execute(query);
  return rows;
};

const getAddressById = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `select * from address where address_id = ${id}`;
  const [rows] = await conn.execute(query);
  return rows;
};

const addAddress = async ({
  userId, addressLine1, addressLine2, city, state, zip,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO ayush.address
  (user_id, address_line_1, address_line_2, city, state, zip)
  VALUES(${userId}, '${addressLine1}', '${addressLine2}', '${city}', '${state}', '${zip}')`;

  await conn.execute(query);
};

const updateAddress = async ({ id }, {
  userId, addressLine1, addressLine2, city, state, zip,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `UPDATE ayush.address
  SET user_id=${userId}, address_line_1='${addressLine1}', address_line_2='${addressLine2}', 
  city='${city}', state='${state}', zip='${zip}'
  WHERE address_id=${id}`;
  await conn.execute(query);
};

const deleteAddress = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `DELETE FROM ayush.address
  WHERE address_id=${id}`;
  await conn.execute(query);
};

module.exports = {
  getAddressList,
  getAddressById,
  addAddress,
  updateAddress,
  deleteAddress,
};
