const candidateService = require('./candidate.service');
const { candidateValidation } = require('./candidate.validation');

const getCandidateList = async (req, res) => {
  try {
    const candidateList = await candidateService.getCandidateList();
    res.send(candidateList);
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

module.exports = {
  getCandidateList,
  addCandidate,
  updateCandidate,
};
