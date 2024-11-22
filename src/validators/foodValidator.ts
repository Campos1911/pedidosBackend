import Joi from "joi";

export const foodValidator = Joi.object({
  name: Joi.string().min(3).required(),
  type: Joi.string().min(3).required(),
  value: Joi.number().positive().required(),
});

export const foodEditValidator = Joi.object({
  name: Joi.string().min(3),
  type: Joi.string().min(3),
  value: Joi.number().positive(),
});
