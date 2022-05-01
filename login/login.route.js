/* eslint-disable no-unused-vars */
const express = require('express');
const { generateAuthToken } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
const Controller = require('./login.controller');

route.post('/register', Controller.userRegistration);
route.post('/login', generateAuthToken);

module.exports = route;
