/* eslint-disable import/no-unresolved */
const express = require('express');

const route = express.Router({ mergeParams: true });
const Controller = require('./candidate.controller');

route.get('/', Controller.getCandidateList);
route.post('/add', Controller.addCandidate);

module.exports = route;
