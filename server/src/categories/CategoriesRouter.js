import { Router } from "express";
import validateSchema from "../utils/validation.js";
import { categoriesValidateSchema } from "./validationsSchema.js";

import { CategoriesController } from "./CategoriesController.js";
import { uploadImageCloudinaryMiddleware } from "../middlewares/upload-image-category.middleware.js";

export const categoryRouter = new Router();
export const categoriesDefaultPath = "/api/categories";

categoryRouter.post(
  "/",
  // validateSchema(categoriesValidateSchema)
  uploadImageCloudinaryMiddleware,
  CategoriesController.create
);
categoryRouter.get("/", CategoriesController.getAll);
categoryRouter.put("/", CategoriesController.update);
categoryRouter.delete("/:id", CategoriesController.deleteCategory);
