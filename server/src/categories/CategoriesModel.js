import mongoose from 'mongoose';
import { schemaOptions } from '../utils/schemaOptions.js';

const Category = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        picture: { type: String },
        type: { type: String },
        parent: { type: mongoose.Types.ObjectId, ref: 'CategoryDB' },
    },
    schemaOptions
);

export default mongoose.model('CategoryDB', Category, 'categories');
