require("dotenv").config();
import jwt from 'jsonwebtoken';

const createJWT = (payload) => {
    let key = process.env.JWT_KEY
    let token = null
    try {
        token = jwt.sign(payload, key);
    } catch (error) {
        console.log(error)
    }

    return token
}

const verifyToken = (token) => {
    let key = process.env.JWT_KEY
    let data = null
    try {
        let decoded = jwt.verify(token, key)
        data = decoded
    } catch (error) {
        console.log(err);
    }
    return data;
}

module.exports = {
    createJWT, verifyToken
}