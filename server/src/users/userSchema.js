import mongoose from "mongoose";
import { schemaOptionsWithTimestamp } from "../utils/schemaOptions.js";
import Joi from "joi";

export const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    description: { type: String },
    userImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dz5jl6tzt/image/upload/v1685188868/userAvatar_fbe972.webp",
    },
    role: { type: String, default: "Waiter" },
    status: { type: String, default: "active" },
  },
  schemaOptionsWithTimestamp
);

export const validationUserSchema = Joi.object({
  firstName: Joi.string().required(),
  secondName: Joi.string().required(),
  email: Joi.string().email(),
  password: Joi.string().min(3),
  phoneNumber: Joi.string(),
  picture: Joi.string(),
  description: Joi.string(),
  role: Joi.string().pattern(/^Waiter|Admin|Courier$/),
  status: Joi.string().pattern(/^active|inactive$/),
});
