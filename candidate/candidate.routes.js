/* eslint-disable import/no-unresolved */
const express = require('express');
const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
const Controller = require('./candidate.controller');

route.get('/', authenticate, Controller.getCandidateList);
route.post('/add', authenticate, Controller.addCandidate);
route.put('/update', authenticate, Controller.updateCandidate);
route.delete('/delete', authenticate, Controller.deleteCandidate);

module.exports = route;
