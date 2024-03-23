"use strict";
// import userRouter from "./src/infrastructure/userRouter";
// import express from "express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// function init(){
//     const port = 4004;
//     const app = express();
//     app.use("/users", userRouter);
//     app.listen(port, ()=>{
//         console.log(`App - Starting in localhost:${port}`)
//     });
// }
// init();
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./src/infrastructure/userRouter"));
function init() {
    const port = 4004;
    const app = (0, express_1.default)();
    app.use("/users", userRouter_1.default);
    app.listen(port, () => {
        console.log(`App - Starting in localhost:${port}`);
    });
}
init();
