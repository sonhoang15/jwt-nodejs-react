import db from "../models"
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password, salt) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

const checkEmail = async (userEmail) => {
    let exists = await db.User.findOne({
        where: { email: userEmail }
    });
    if (exists) {
        return {
            EM: "Email already exists",
            EC: 1,
            DT: {}
        };
    }
    return false;
}
const checkPhone = async (userPhone) => {
    let exists = await db.User.findOne({
        where: { phone: userPhone }
    });
    if (exists) {
        return {
            EM: "Phone already exists",
            EC: 1,
            DT: {}
        };
    }
    return false;
}

const registerNewUser = async (userData) => {
    try {
        let isEmailExists = await checkEmail(userData.email);
        if (isEmailExists === true) {
            return {
                EM: "Email already exists",
                EC: 1,
                DT: {}
            };
        }
        let isPhoneExists = await checkPhone(userData.phone);
        if (isPhoneExists === true) {
            return {
                EM: "Phone already exists",
                EC: 1,
                DT: {}
            };
        }
        let hashPass = hashPassword(userData.password);

        await db.User.create({
            email: userData.email,
            password: hashPass,
            phone: userData.phone,
            username: userData.username
        });
        return {
            EM: "User created successfully",
            EC: 0,
            DT: {}
        };
    } catch (error) {
        console.error("Error in registerNewUser:", error);
        return {
            EM: "Server error",
            EC: -2,
            DT: {}
        };
    }

}
module.exports = {
    registerNewUser
}