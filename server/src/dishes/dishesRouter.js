import { Router } from "express";
import validateSchema from "../utils/validation.js";
import { dishesValidateSchema } from "./validationsSchema.js";

import { DishesController } from "./DishesController.js";
import { uploadImageCloudinaryMiddleware } from "../middlewares/upload-image-cloudinary.middleware.js";

export const dishRouter = new Router();
export const dishesDefaultPath = "/api/dishes";
dishRouter.post(
  "/",
  uploadImageCloudinaryMiddleware,
  validateSchema(dishesValidateSchema),
  DishesController.create
);
dishRouter.get("/", DishesController.getAll);
dishRouter.get("/:id", DishesController.getOne);
dishRouter.put("/", uploadImageCloudinaryMiddleware, DishesController.update);
dishRouter.delete("/:id", DishesController.deleteDish);
