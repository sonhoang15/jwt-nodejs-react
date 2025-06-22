const handleHome = (req, res) => {
    return res.render("home.ejs")
}
const handleUse = (req, res) => {
    return res.render("user.ejs")
}

module.exports = {
    handleHome, handleUse
}