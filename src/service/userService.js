import bcrypt from 'bcryptjs';
import e from 'express';
// get the client
import mysql from 'mysql2/promise';
// get the promise implementation, we will use bluebird
import bluebird from 'bluebird';

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password, salt) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}
const createNewUser = (email, password, username) => {
    let hashPass = hashPassword(password);
    connection.query(
        'INSERT INTO users (email,password,username) VALUES (?,?,?)', [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );
}
const getUserlist = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    let user = [];
    // connection.query(
    //     'SELECT * FROM users ',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //             return user;
    //         }
    //         user = results
    //         return user;
    //     }
    // );
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    createNewUser, getUserlist
}