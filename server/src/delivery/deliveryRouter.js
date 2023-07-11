import { Router } from 'express';
import validateSchema from '../utils/validation.js';

import { deliveryValidateSchema } from './validationsSchema.js';

import { DeliveryController } from './DeliveryController.js';

export const deliveryRouter = new Router();
export const deliveryDefaultPath = '/api/delivery';

deliveryRouter.post('/', validateSchema(deliveryValidateSchema), DeliveryController.create);
deliveryRouter.get('/', DeliveryController.getAll);
deliveryRouter.get('/:id', DeliveryController.getOne);
deliveryRouter.get('/send/:id', DeliveryController.sendMsg);
deliveryRouter.put('/', DeliveryController.update);
deliveryRouter.delete('/:id', DeliveryController.deleteDelivery);
