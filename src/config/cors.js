require("dotenv").config();

const configcors = (app) => {
    const allowedOrigins = [process.env.REACT_URL || 'http://localhost:3000'];
    app.use((req, res, next) => {

        const origin = req.headers.origin;

        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // ✅ Xử lý preflight requestz
        if (req.method === 'OPTIONS') {
            return res.sendStatus(204); // No Content
        }

        next();
    });
};

export default configcors;