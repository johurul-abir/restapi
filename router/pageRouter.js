import express from "express"

import{showHomepage, showCreateUser} from "../controller/pageController.js"


//init router
const router = express.Router();



//create page router
router.get("/", showHomepage)
router.get("/create", showCreateUser);




//export defaut
export default router;