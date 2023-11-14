
import express from "express";
import {userPhoto} from "../utilites/multer.js"
import { verifyToken } from "../middlewares/verifyToken.js";
import {createUser, getUser, getSingleUser, updateUser, deleteUser } from "../controller/userController.js"




// init router
const router = express.Router();
router.use(verifyToken);

router.get("/", getUser);
router.patch("/:id", userPhoto, updateUser);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteUser);
router.post("/", userPhoto, createUser);




// export default
export default router;