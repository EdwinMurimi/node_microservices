const Joi = require("joi");

function registerValidation(user) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

  return schema.validate(user);
}

module.exports = registerValidation;