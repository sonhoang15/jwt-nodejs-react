import userService from "../service/userService"


// Create the connection to database


const handleHome = (req, res) => {
    return res.render("home.ejs")
}
const handleUse = (req, res) => {
    return res.render("user.ejs")
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewUser(email, password, username)

    userService.getUserlist();
    return res.send("handleCreateNewUser")
}

module.exports = {
    handleHome, handleUse, handleCreateNewUser
}