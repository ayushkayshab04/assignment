/* eslint-disable no-console */
const { mysqlManager } = require('../manager/index');

const getCandidateList = async () => {
  const conn = await mysqlManager.getConnection();
  const query = 'select * from candidates';

  const [rows] = await conn.execute(query);
  console.log(rows);
  return rows;
};

// const getEmployeeById = async ({ id }) => {
//   const conn = await mysqlManager.getConnection();
//   const query = `select * from project.employee where employee_id = ${id}`;
//   const [rows] = await conn.execute(query);
//   return rows;
// };

const addCandidate = async ({
  firstName, lastName, email, userId,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO candidates
    (first_name, last_name, email, user_id)
    VALUES('${firstName}', '${lastName}', ${email}, '${userId}')`;
  await conn.execute(query);
};

// const updateEmployee = async ({ id }, {
//   firstName, lastName, age, desig, depart,
// }) => {
//   const conn = await mysqlManager.getConnection();
//   const query = `UPDATE project.employee
//     SET first_name='${firstName}', last_name='${lastName}',
//     age=${age}, desgination='${desig}', department='${depart}'
//     WHERE employee_id=${id}`;
//   await conn.execute(query);
//   const data = await getEmployeeById({ id });
//   return data;
// };

// const deleteEmployee = async ({ id }) => {
//   const conn = await mysqlManager.getConnection();
//   const query = `DELETE FROM project.employee WHERE employee_id=${id}`;
//   await conn.execute(query);
// };

module.exports = {
  getCandidateList,
  // getEmployeeById,
  addCandidate,
  // updateEmployee,
  // deleteEmployee,

};
