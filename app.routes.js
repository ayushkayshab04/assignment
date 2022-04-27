const express = require('express');
const { candidateRoute } = require('./candidate');
const { loginRoute } = require('./login');

const route = express.Router({ mergeParams: true });
route.use('/candidate', candidateRoute);
route.use('/user', loginRoute);

module.exports = route;
