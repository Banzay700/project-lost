import mongoose from 'mongoose'
import { schemaOptions } from '../utils/schemaOptions.js'

export const reservationSchema = new mongoose.Schema(
  {
    tags: [String],
    table: { type: mongoose.SchemaTypes.ObjectId, ref: 'TablesDB', required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    // booking: { type: Number, required: true },
    persons: { type: Number, required: true },
    clientName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'cancelled', 'done'],
    },
    email: String,
    note: String,
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
  },
  schemaOptions,
)

export const ReservationModel = mongoose.model('ReservationsDB', reservationSchema, 'reservations')
