const mysql = require("mysql2/promise");


module.exports = ({
  environment,
  host,
  port,
  user,
  password,
  database,
}) => {
  if (environment === "development") {
    const getConnection = async () => {
      return mysql.createPool({
        host,
        port,
        user,
        password,
        database,
      });
    };

    return {
      getConnection,
    };
  }
};
