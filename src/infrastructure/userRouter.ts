import express from "express";
import { userController } from "./dependencies";

const userRouter = express.Router();
userRouter.get("/:id/getProduct", userController.getProduct.bind(userController));
userRouter.post("/:id/createProduct", userController.createProduct.bind(userController));
export default userRouter;