/* eslint-disable no-unused-vars */
const express = require('express');
const { authenticate, generateAuthToken } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
const Controller = require('./login.controller');

route.post('/register', generateAuthToken, Controller.userRegistration);
route.post('/login', authenticate, Controller.login);

module.exports = route;
