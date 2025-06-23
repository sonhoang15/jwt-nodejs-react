import bcrypt from 'bcryptjs';
import e from 'express';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from '../models/index';

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password, salt) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}
const createNewUser = async (email, password, username) => {
    let hashPass = hashPassword(password);

    try {
        await db.User.create({
            username: username,
            email: email,
            password: password
        })
    } catch (e) {
        console.log(e)
    }


}
const getUserlist = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.log(error)
    }

}
const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}
const editUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    try {
        const [rows, fields] = await connection.execute('select * FROM users WHERE id=?', [id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}
const updateUserInfor = async (email, username, id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    try {
        const [rows, fields] = await connection.execute('UPDATE users SET username = ?  ,email = ? WHERE id= ? ', [username, email, id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createNewUser, getUserlist, deleteUser, editUser, updateUserInfor
}