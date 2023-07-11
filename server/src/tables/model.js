import mongoose from 'mongoose'
import { schemaOptions } from '../utils/schemaOptions.js'

export const tableSchema = new mongoose.Schema(
  {
    number: { type: String, required: true, unique: true },
    seats: { type: Number, required: true },
    status: { type: String, required: true, default: 'free' },
    sector: { type: Number, required: true, default: 1 },
  },
  schemaOptions,
)

export const Model = mongoose.model('TablesDB', tableSchema, 'tables')
