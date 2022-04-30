/* eslint-disable import/no-unresolved */
const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
// const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
const Controller = require('./candidate.controller');

route.get('/', Controller.getCandidateList);
route.post('/add', Controller.addCandidate);
route.post('/uploadPic', upload.single('avatar'), Controller.addAvatar);
route.put('/update', Controller.updateCandidate);
route.delete('/delete', Controller.deleteCandidate);

module.exports = route;
