import { raw } from "body-parser";
import db from "../models";

const getAllUsers = async () => {

    try {
        let users = await db.User.findAll({
            attributes: ["id", "email", "username", "phone", "sex"],
            include: [
                {
                    model: db.Group,
                    attributes: ["name", "description"] // Include role name
                },


            ],
            raw: true, // Use raw: false to get instances with methods
            nest: true
        });
        if (users) {
            return {
                EM: "Get all users successfully",
                EC: 0,
                DT: users
            };
        } else {
            return {
                EM: "No users found",
                EC: 1,
                DT: []
            };
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return {
            EM: "Error fetching users",
            EC: -1,
            DT: []
        };

    }

}
const createUser = async (userData) => {

}
const updateUser = async (userId, userData) => {

}
const deleteUser = async (userId) => {

}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}