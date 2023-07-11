import Joi from 'joi';

export const deliveryValidateSchema = Joi.object({
    status: Joi.string().pattern(/^opened|closed|cancel$/),
    order: Joi.string(),
    bill: Joi.string(),
    time: Joi.number().required(),
    clientInfo: Joi.object({
        name: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        paymentMethod: Joi.string().required(),
        email: Joi.string().email(),
        description: Joi.string(),
    }),
    courier: Joi.string(),
    address: {
        street: Joi.string().required(),
        latitude: Joi.number(),
        longitude: Joi.number(),
    },
});
