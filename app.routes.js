const express = require('express');
const { candidateRoute } = require('./candidate');
const { loginRoute } = require('./login');
const { addressRoute } = require('./address/index');

const route = express.Router({ mergeParams: true });
route.use('/candidate', candidateRoute);
route.use('/user', loginRoute);
route.use('/address', addressRoute);

module.exports = route;
