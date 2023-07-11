import mongoose from 'mongoose';
import { schemaOptions } from '../utils/schemaOptions.js';

export const TelegaClient = new mongoose.Schema(
    {
        chatId: { type: String, unique: true },
        userId: { type: String, unique: true },
        phoneNumber: { type: String, unique: true },
        nickname: { type: String, unique: true },
        name: String,
    },
    schemaOptions
);

export default mongoose.model('TelegaClientDB', TelegaClient, 'tgclient');
