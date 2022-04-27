/* eslint-disable import/no-unresolved */
const express = require('express');

const route = express.Router({ mergeParams: true });
const Controller = require('./candidate.controller');

route.get('/', Controller.getCandidateList);
// route.get('/:id', Controller.getEmployeeById);
// route.post('/add', Controller.addEmployee);
// route.put('/:id', Controller.updateEmployee);
// route.delete('/delete/:id', Controller.deleteEmployee);

module.exports = route;
