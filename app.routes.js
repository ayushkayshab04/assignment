const express = require("express");
const { employeeRoute } = require("./employee");

const route = express.Router({ mergeParams: true });
route.use("/employee", employeeRoute);

module.exports = route;