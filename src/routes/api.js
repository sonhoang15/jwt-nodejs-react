import express from "express";
import userController from "../controller/userController";
const router = express.Router();

const initApiRoutes = (app) => {
    router.post("/register", userController.handleRegister);
    router.post("/login", userController.handleLogin);

    return app.use("/api/v1", router)

}

export default initApiRoutes;