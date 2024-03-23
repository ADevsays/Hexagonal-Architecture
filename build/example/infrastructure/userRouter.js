"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const userRouter = express_1.default.Router();
userRouter.post("/:id/email", dependencies_1.userController.run.bind(dependencies_1.userController));
exports.default = userRouter;
