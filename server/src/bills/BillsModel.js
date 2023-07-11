import mongoose from 'mongoose';
import { schemaOptionsWithTimestamp } from '../utils/schemaOptions.js';

export const Bill = new mongoose.Schema(
    {
        orderID: { type: mongoose.Types.ObjectId, ref: 'OrderDB' },
        status: { type: String, default: 'opened' },
        totalPrice: { type: Number },
        tip: { type: Number, default: 0 },
        email: { type: String, default: '' },
        paymentMethod: String,
    },
    schemaOptionsWithTimestamp
);

export default mongoose.model('BillDB', Bill, 'bills');
