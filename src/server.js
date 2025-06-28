import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import initApiRoutes from "./routes/api";
import configcors from "./config/cors";
// import connection from "./config/connectDB"
require("dotenv").config();


const app = express();

configViewEngine(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


// connection();
configcors(app);

initWebRoutes(app);
initApiRoutes(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("backend runing " + PORT)
})

