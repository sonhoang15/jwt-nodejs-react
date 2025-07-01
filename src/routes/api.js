import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction"
import roleController from "../controller/roleController"
const router = express.Router();

// const checkUserLogin = (req, res, next) => {

// }


const initApiRoutes = (app) => {
    app.all('*', checkUserJWT, checkUserPermission);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);
    router.post("/logout", apiController.handleLogout);


    router.get("/account", userController.getUserAccount)
    router.get("/user/read", userController.read);
    router.post("/user/create", userController.create);
    router.put("/user/update", userController.update);
    router.delete("/user/delete", userController.DeleteUser);


    router.get("/role/read", roleController.read);
    router.post("/role/create", roleController.create);
    router.put("/role/update", roleController.update);
    router.delete("/role/delete", roleController.DeleteUser);


    router.get("/group/read", groupController.read);

    return app.use("/api/v1", router)

}

export default initApiRoutes;