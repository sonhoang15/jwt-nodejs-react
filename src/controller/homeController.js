import userService from "../service/userService"


// Create the connection to database


const handleHome = (req, res) => {
    return res.render("home.ejs")
}
const handleUser = async (req, res) => {

    let userList = await userService.getUserlist();
    return res.render("user.ejs", { userList })
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username)

    return res.send("handleCreateNewUser")
}

module.exports = {
    handleHome, handleUser, handleCreateNewUser
}