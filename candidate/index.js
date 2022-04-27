const candidateRoute = require('./candidate.routes');
const candidateController = require('./candidate.controller');
const candidateService = require('./candidate.service');

module.exports = {
  candidateController,
  candidateService,
  candidateRoute,
};
