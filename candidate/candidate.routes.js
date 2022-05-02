/* eslint-disable import/no-unresolved */
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `Avatar-${Date.now()}.jpeg`);
  },
});

const upload = multer({ storage });
const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
const Controller = require('./candidate.controller');

route.get('/', authenticate, Controller.getCandidateList);
route.get('/:id', authenticate, Controller.getCandidate);
route.get('/file/:id', authenticate, Controller.getFile);
route.post('/add', authenticate, Controller.addCandidate);
route.post('/uploadPic/:id', upload.single('avatar'), Controller.addAvatar);
route.put('/update', authenticate, Controller.updateCandidate);
route.delete('/delete', authenticate, Controller.deleteCandidate);

module.exports = route;
