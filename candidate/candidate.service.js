/* eslint-disable no-console */
const { mysqlManager } = require('../manager/index');

const getCandidateList = async () => {
  const conn = await mysqlManager.getConnection();
  const query = 'select * from candidates';

  const [rows] = await conn.execute(query);
  return rows;
};

const addAvatar = async ({ id }, { filename }) => {
  const conn = await mysqlManager.getConnection();
  const query = `UPDATE candidates
  SET file='${filename}'
  WHERE candidate_id=${id};
  `;
  await conn.execute(query);
};

const addCandidate = async ({
  firstName, lastName, email, userId,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO ayush.candidates
  (user_id, first_name, last_name, email)
  VALUES(${userId}, '${firstName}', '${lastName}', '${email}')`;

  await conn.execute(query);
};

const updateCandidate = async ({ id }, {
  firstName, lastName, email,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `UPDATE candidates
    SET first_name='${firstName}', last_name='${lastName}',
    email='${email}';
    WHERE candidate_id=${id}`;
  await conn.execute(query);
};

const deleteCandidate = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `DELETE FROM ayush.candidates
  WHERE candidate_id=${id}`;
  await conn.execute(query);
};

module.exports = {
  getCandidateList,
  addAvatar,
  addCandidate,
  updateCandidate,
  deleteCandidate,
};
