const Joi = require("joi");

function taskValidation(task) {
  const schema = Joi.object({
    task_name: Joi.string().required(),
    project_id: Joi.string().required(),
    user_id: Joi.string().required(),
    task_start: Joi.date().required(),
    task_end: Joi.date().required(),
  });

  return schema.validate(task);
}

module.exports = taskValidation;
