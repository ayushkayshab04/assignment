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

const emailValidation = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const tokenValidation = Joi.object({
  token: Joi.string().required(),
});

const addressValidation = Joi.object({
  userId: Joi.number().required(),
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.string().required(),
});

const fileNameValidation = Joi.object({
  filename: Joi.string().required(),
});

module.exports = {
  fileNameValidation,
  candidateValidation,
  idValidation,
  tokenValidation,
  emailValidation,
  addressValidation,
};
