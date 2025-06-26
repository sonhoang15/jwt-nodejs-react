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

const getAllUsersWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "email", "username", "phone", "sex"],
            include: [
                {
                    model: db.Group,
                    attributes: ["name", "description"] // Include role name
                },
            ],
        })
        let totalPage = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPage: totalPage,
            users: rows
        }
        return {
            EM: "ok fetching users",
            EC: 0,
            DT: data
        };
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
    try {
        await db.User.create({});

    } catch (error) {
        console.error("Error creating user:", error);
        return {
            EM: "Error creating user",
            EC: -1,
            DT: {}
        };

    }

}
const updateUser = async (userId, userData) => {
    try {

    } catch (error) {
        console.error("Error updating user:", error);
        return {
            EM: "Error updating user",
            EC: -1,
            DT: {}
        };

    }

}
const deleteUser = async (userId) => {
    try {
        let user = await db.User.findOne({
            where: { id: userId }
        });
        if (user) {
            await db.User.destroy({
                where: { id: userId }
            });
            return {
                EM: "User deleted successfully",
                EC: 0,
                DT: {}
            };
        } else {
            return {
                EM: "User not found",
                EC: 2,
                DT: {}
            };
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        return {
            EM: "Error deleting user",
            EC: -1,
            DT: {}
        };

    }

}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getAllUsersWithPagination
}