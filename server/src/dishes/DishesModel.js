import mongoose from "mongoose";
import { schemaOptionsWithTimestamp } from "../utils/schemaOptions.js";

const Dish = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String },
    description: { type: String },
    category: { type: mongoose.Types.ObjectId, ref: "CategoryDB" },
    weight: { type: Number, required: true },
    bonus: Number,
    status: { type: String, default: "active" },
    additionalFood: [
      {
        type: mongoose.Types.ObjectId,
        ref: "DishDB",
      },
    ],
  },
  schemaOptionsWithTimestamp
);

export default mongoose.model("DishDB", Dish, "dishes");
