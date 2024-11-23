import Joi from "joi";

export const orderValidator = Joi.object({
  userId: Joi.string().required(),
  foodId: Joi.array().min(1).required(),
});

export const orderEditValidator = Joi.object({
  foodId: Joi.array().min(1).required(),
});
