/* eslint-disable no-unused-vars */
const Joi = require('joi');

const candidateValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userId: Joi.number().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const idValidation = Joi.object({
  id: Joi.number().required(),
});

module.exports = {
  candidateValidation,
  idValidation,
};
