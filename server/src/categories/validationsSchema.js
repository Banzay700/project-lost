import Joi from 'joi';

export const categoriesValidateSchema = Joi.object({
    title: Joi.string().required().min(3),
    picture: Joi.string(),
    type: Joi.string().min(5),
    parent: Joi.string().min(3),
});
