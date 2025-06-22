import bcrypt from 'bcryptjs';
import mysql from 'mysql2';
const salt = bcrypt.genSaltSync(10);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

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
const getUserlist = () => {
    let user = [];
    connection.query(
        'SELECT * FROM users ',
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log(results)
        }
    );
}

module.exports = {
    createNewUser, getUserlist
}