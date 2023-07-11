import { Router } from "express";
import { UserController } from "./usersController.js";
import { uploadImageCloudinaryMiddleware } from "../middlewares/upload-image-cloudinary.middleware.js";
import {
  authMiddlewareRefreshToken,
  authMiddlewareAccessToken,
} from "../middlewares/auth.middleware.js";
import validateSchema from "../utils/validation.js";
import { validationUserSchema } from "./userSchema.js";

export const usersRouter = new Router();
export const userDefaultPath = "/api/users";

usersRouter.get("/", authMiddlewareAccessToken, UserController.getAll);
usersRouter.get("/inLogin", UserController.getUsersLogin);
usersRouter.post(
  "/registration",
  authMiddlewareAccessToken,
  uploadImageCloudinaryMiddleware,
  validateSchema(validationUserSchema),
  UserController.registration
);
usersRouter.post("/login", UserController.login);
usersRouter.post("/logout", UserController.logout);
usersRouter.get("/refresh", authMiddlewareRefreshToken, UserController.refresh);

usersRouter.get("/:userId", authMiddlewareAccessToken, UserController.getByID);
usersRouter.post(
  "/:userId",
  authMiddlewareAccessToken,
  uploadImageCloudinaryMiddleware,
  UserController.update
);
