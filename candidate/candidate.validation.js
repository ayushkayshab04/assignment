const Joi = require('joi');

const candidateValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userId: Joi.number().required(),
  email: Joi.string().required().email(),
});

module.exports = {
  candidateValidation,
};
