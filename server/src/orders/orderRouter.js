import { Router } from 'express';
import validateSchema from '../utils/validation.js';

import { ordersValidateSchema } from './validationsSchema.js';

import { OrderController } from './OrdersController.js';

export const orderRouter = new Router();
export const orderDefaultPath = '/api/orders';

orderRouter.post('/', validateSchema(ordersValidateSchema), OrderController.create);
orderRouter.get('/', OrderController.getAll);
orderRouter.get('/:id', OrderController.getOne);
orderRouter.put('/', OrderController.update);
orderRouter.delete('/:id', OrderController.deleteOrder);
