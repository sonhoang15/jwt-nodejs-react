require("dotenv").config();

const configcors = (app) => {
    const allowedOrigins = [
        process.env.REACT_URL || 'http://localhost:3000',
        'https://jwt-react-hook-hoang-sns-projects.vercel.app',
        'https://jwt-react-hook-git-master-hoang-sns-projects.vercel.app'
    ];

    app.use((req, res, next) => {
        const origin = req.headers.origin;

        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Vary', 'Origin');
        }

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        if (req.method === 'OPTIONS') {
            return res.sendStatus(204);
        }

        next();
    });
};

export default configcors;
