const express = require('express');

const route = express.Router({ mergeParams: true });
const Controller = require('./login.controller');

route.post('/register', Controller.candidateRegistration);
route.post('/login', Controller.login);

module.exports = route;
