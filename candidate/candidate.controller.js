const candidateService = require('./candidate.service');
const { idValidation, candidateValidation, fileNameValidation } = require('../validation/index');

const getCandidateList = async (req, res) => {
  try {
    const candidateList = await candidateService.getCandidateList();
    res.send(candidateList);
  } catch (err) {
    throw new Error(err);
  }
};

const getFile = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync({ id });
    const file = await candidateService.getFile({ id });
    res.send(file);
  } catch (err) {
    throw new Error(err);
  }
};

const addAvatar = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    await fileNameValidation.validateAsync({ filename });
    await candidateService.addAvatar({ id }, { filename });
    res.send('Image insertion Sucessfull');
  } catch (err) {
    throw new Error(err);
  }
};

const addCandidate = async (req, res) => {
  try {
    const {
      firstName, lastName, userId, email,
    } = req.body;
    await candidateValidation.validateAsync(req.body);
    await candidateService.addCandidate({
      firstName, lastName, userId, email,
    });
    res.send('candidate added Sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    await candidateValidation.validateAsync(req.body);
    await idValidation.validateAsync(id);
    const result = await candidateService.updateCandidate({ id }, {
      firstName,
      lastName,
      email,
    });
    res.send(result);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync(id);
    await candidateService.deleteCandidate({ id });
    res.send('Candidate deleted sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getCandidateList,
  getFile,
  addAvatar,
  addCandidate,
  updateCandidate,
  deleteCandidate,
};
