// import userRouter from "./src/infrastructure/userRouter";
// import express from "express";

// function init(){
//     const port = 4004;
//     const app = express();
//     app.use("/users", userRouter);
//     app.listen(port, ()=>{
//         console.log(`App - Starting in localhost:${port}`)
//     });
// }

// init();



import express from "express";
import userRouter from "./src/infrastructure/userRouter";

function init(){
    const port = 4004;
    const app = express();
    app.use("/users", userRouter);
    app.listen(port, ()=>{
        console.log(`App - Starting in localhost:${port}`)
    });
}

init();


