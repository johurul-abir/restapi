import express from "express";
import {userPhoto} from "../utilites/multer.js"
import {createTeam} from "../controller/teamController.js"



// init router
const router = express.Router();

router.post("/team", createTeam);


// export default
export default router;