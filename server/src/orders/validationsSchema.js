import Joi from "joi";

export const ordersValidateSchema = Joi.object({
  orderType: Joi.string()
    .required()
    .pattern(/^takeAway|delivery|dineIn$/),
  status: Joi.string().pattern(/^opened|closed|cancel$/),
  orderNumber: Joi.number().required(),
  table: Joi.string(),
  dishes: Joi.array().items(
    Joi.object({
      dishID: Joi.string().required().min(3),
      title: Joi.string().min(3),
      price: Joi.number().positive(),
      picture: Joi.string(),
      amount: Joi.number().required().integer().positive(),
      dishTotalPrice: Joi.number().integer().positive(),
    })
  ),
  description: Joi.string().min(5),
  totalPrice: Joi.number().integer().positive(),
  user: Joi.string().min(3),
});
