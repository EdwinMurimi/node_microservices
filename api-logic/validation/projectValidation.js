const Joi = require("joi");

function projectValidation(task) {
  const schema = Joi.object({
    project_name: Joi.string().required(),
    project_start: Joi.date().required(),
    project_end: Joi.date().required(),
  });

  return schema.validate(task);
}

module.exports = projectValidation;
