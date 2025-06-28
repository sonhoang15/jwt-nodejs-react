import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import initApiRoutes from "./routes/api";
import configcors from "./config/cors";
import cookieParser from 'cookie-parser'
// import connection from "./config/connectDB"
require("dotenv").config();


const app = express();

configViewEngine(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser())

// connection();
configcors(app);

initWebRoutes(app);
initApiRoutes(app);


app.use((req, res) => {
    return res.send("404 not fond")
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("backend runing " + PORT)
})

