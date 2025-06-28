import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction"
const router = express.Router();

// const checkUserLogin = (req, res, next) => {

// }

const initApiRoutes = (app) => {
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    router.get("/user/read", checkUserJWT, checkUserPermission, userController.read);
    router.post("/user/create", userController.create);
    router.put("/user/update", userController.update);
    router.delete("/user/delete", userController.DeleteUser);

    router.get("/group/read", groupController.read);

    return app.use("/api/v1", router)

}

export default initApiRoutes;