import mongoose, { Schema } from "mongoose";

export const tokenSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  refreshToken: { type: String, required: true },
});
