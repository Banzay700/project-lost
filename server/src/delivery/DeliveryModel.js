import mongoose from "mongoose";
import { schemaOptionsWithTimestamp } from "../utils/schemaOptions.js";

export const Delivery = new mongoose.Schema(
  {
    status: { type: String, default: "opened" },
    order: { type: mongoose.Types.ObjectId, ref: "OrderDB" },
    bill: { type: mongoose.Types.ObjectId, ref: "BillDB" },
    time: { type: Number, required: true },
    clientInfo: {
      name: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      paymentMethod: { type: String, required: true },
      email: String,
      description: String,
    },
    courier: { type: mongoose.Types.ObjectId, ref: "user" },
    address: {
      street: { type: String, required: true },
      latitude: Number,
      longitude: Number,
    },
  },
  schemaOptionsWithTimestamp
);

export default mongoose.model("DeliveryDB", Delivery, "delivery");
