import mongoose from "mongoose";
import { tokenSchema } from "./tokenSchema.js";

const TokenModel = mongoose.model("tokens", tokenSchema);

export default TokenModel;