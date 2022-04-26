const employeeRoute = require("./employee.routes");
const employeeController = require("./employee.controller");
const employeeService = require("./employee.service");

module.exports = {
  employeeController,
  employeeService,
  employeeRoute,
};
