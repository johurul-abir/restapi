
import express from "express";
import {bookMulter} from "../utilites/multer.js"
import {createBook, getAllBooks, getSingleBooks, updateBook, deleteBooks} from "../controller/bookController.js"



// init router
const router = express.Router();

//craete router here
router.get("/api/v1/book", getAllBooks)
router.get("/api/v1/book/:id", getSingleBooks)
router.post("/api/v1/book/:id", bookMulter, updateBook)
router.delete("/api/v1/book/:id", deleteBooks)
router.post("/api/v1/book", bookMulter, createBook);



// export default
export default router;