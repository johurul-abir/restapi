
import Book from "../models/Book.js"

import asyncHandler from "express-async-handler"





/**
 * @DECS CREATE BOOKS
 * @ROUTER /api/v1/book
 * @METHOD POST
 * @ACCESS PUBLIC
 */
export const createBook = asyncHandler(async (req, res) => {

   const{name, writter } = req.body;

  const data = await Book.create({name, writter, photo: req.file.filename});
   
   res.status(200).json({message: "book create successfully", users: data});
}
);




/**
 * @DECS Gate All Books
 * @ROUTER /api/v1/book
 * @METHOD get
 * @ACCESS PUBLIC
 */
export const getAllBooks = asyncHandler( async (req, res)=> {
   const data = await Book.find();

   if(data.length === 0){
      return res.status(404).json({message:"data not found"})
   };

   res.status(200).json({message: "get all books successfully", books: data})
   });





   /**
 * @DECS Gate Single Books
 * @ROUTER /api/v1/book
 * @METHOD get
 * @ACCESS PUBLIC
 */
export const getSingleBooks =  asyncHandler(async (req, res) => {
   const{id} = req.params;
   //quary data
   const data = await Book.findById({_id : id});

   //validation single data
   if(!data){
      return res.status(404).json({message: "not single data found", book: data});
   }

   res.status(200).json({message:"get single data successfully done", user: data})

});




/**
 * @DECS Update BOOKS
 * @ROUTER /api/v1/book
 * @METHOD POST
 * @ACCESS PUBLIC
 */

export const updateBook = asyncHandler(async (req, res) => {

   const{id} = req.params;

   let{name, writter} = req.body;

  //edit user photo
  let bookphoto = null;
  if(req.file?.filename){
   bookphoto = req.file.filename;
  }

   let update = await Book.findByIdAndUpdate( id, {name, writter, photo: bookphoto}, {
      new: true
   })
   
   res.status(200).json({message: "book data update successfully done", book: update});
}
);






   /**
 * @DECS Delete Books
 * @ROUTER /api/v1/book
 * @METHOD Delete
 * @ACCESS PUBLIC
 */
   export const deleteBooks =  asyncHandler(async (req, res) => {
      const{id} = req.params;
      //quary data
      const data = await Book.findByIdAndDelete(id)
      //validation single data
      if(!data){found
         return res.status(404).json({message: "not delete book ", book: data});
      }
   
      res.status(200).json({message:"book delete successfully done", user: data})
   
   });