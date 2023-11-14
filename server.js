import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import {mongodbConnection} from "./config/mongodb.js";
import cors from "cors";
import ejs from "ejs"
import ejslayouts from "express-ejs-layouts";
import cookieParser from "cookie-parser"


//Router import
import userRouter from "./router/userRouter.js";
import bookRouter from "./router/bookRouter.js";
import teamRouter from "./router/teamRouter.js";
import pageRouter from "./router/pageRouter.js";
import authRouter from "./router/authRouter.js";

//middleware import
import {errorHandler} from "./middlewares/errHandler.js"
//import {accessToken} from "./middlewares/verifyToken.js"

//configaration
dotenv.config();


//Server Port
const PORT = process.env.PORT || 6060;


// init express
const app = express();



//middle ware support
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//use cookie parser
app.use(cookieParser());




//static folder
app.use(express.static("public"));
app.use(cors());

//set ejs
app.set('view engine', 'ejs');


//layout use
app.use(ejslayouts);



//use Router
app.use("/api/v1/user", userRouter);
app.use(bookRouter);
app.use(teamRouter);
app.use(pageRouter);
app.use("/api/v1", authRouter);



//use error handler
app.use(errorHandler);
//app.use(accessToken);



app.listen(PORT, () => {
    mongodbConnection();
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});