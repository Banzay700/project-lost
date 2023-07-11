import { Router } from 'express';
import validateSchema from '../utils/validation.js';

import { billsValidateSchema } from './validationsSchema.js';

import { BillsController } from './BillsController.js';

export const billsRouter = new Router();
export const billsDefaultPath = '/api/bills';

billsRouter.post('/', validateSchema(billsValidateSchema), BillsController.create);
billsRouter.get('/send/:id', BillsController.sendBill);
billsRouter.get('/', BillsController.getAll);
billsRouter.get('/:id', BillsController.getOne);
billsRouter.put('/', BillsController.update);
billsRouter.delete('/:id', BillsController.deleteBill);
