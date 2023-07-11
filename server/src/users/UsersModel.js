import mongoose from "mongoose";
import { userSchema } from "./userSchema.js";

const UsersModel = mongoose.model("user", userSchema, "users");

export default UsersModel;
