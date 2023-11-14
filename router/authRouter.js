
import express from "express";
import{loginUserAuth, logoutUserAuth} from "../controller/authController.js";




//init router
const router = express.Router();

//create router
router.post("/login", loginUserAuth);             
router.get("/logout", logoutUserAuth);





//export default 
export default router;


