import crudService from "../service/crudService";

const handleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.phone) {
            return res.status(200).json({
                EM: "Missing required parameters",
                EC: 1,
                DT: {}

            });
        }
        if (req.body.password && req.body.password.length < 6) {
            return res.status(200).json({
                EM: "Password must be at least 6 characters",
                EC: 1,
                DT: {}
            });
        }
        let data = await crudService.registerNewUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT || {}
        });
    } catch (error) {
        console.error("Error in handleRegister:", error);
        return res.status(500).json({
            EM: "err Server Error",
            EC: -1,
            DT: {}
        });
    }
}

const handleLogin = async (req, res) => {
    try {
        let data = await crudService.handleUserLogin(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (error) {
        console.error("Error in handleLogin:", error);
        return res.status(500).json({
            EM: "err Server Error",
            EC: -1,
            DT: {}
        });
    }
}
module.exports = {
    handleRegister, handleLogin
}
