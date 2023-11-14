
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";


/**
 * @DECS get all user
 * @ROUTER /api/v1/user
 * @METHOD get
 * @ACCESS PUBLIC
 */
export const getUser = asyncHandler(async (req, res) => {
   //gett all data
   const data = await User.find()


   //validation
   if(data.length=== 0){
      res.json({message:"user data not found", users: data})
   }
res.status(200).json({message:"user data get successfull", users: data});
}
)



/**
 * @DECS get single Data
 * @ROUTER /api/v1/user
 * @METHOD get
 * @ACCESS PUBLIC
 */
export const getSingleUser = asyncHandler(async (req, res) => {
   const{id} = req.params;

   //gett all data
   const data = await User.findById(id)


res.status(200).json({message:"get single user data successfull", user: data});
});


/**
 * @DECS Update user data
 * @ROUTER /api/v1/user
 * @METHOD patch
 * @ACCESS PUBLIC
 */
export const updateUser = asyncHandler(async (req, res) => {
   const{id} = req.params;

   const {name}= req.body;

   //gett all data
   const data =await User.findByIdAndUpdate(id, {name},{new: true});


res.status(200).json({message:"update user data successfull", user: data});
}
)



/**
 * @DECS DELETE USER
 * @ROUTER /api/v1/user
 * @METHOD DELETE
 * @ACCESS PUBLIC
 */
export const deleteUser = asyncHandler(async (req, res) =>{
   const {id} = req.params;

   const data =await User.findByIdAndDelete(id);

   res.status(200).json({message: "user data delete successfully done", user: data});
})




/**
 * @DECS CREATE USER
 * @ROUTER /api/v1/user
 * @METHOD POST
 * @ACCESS PUBLIC
 */
export const createUser = asyncHandler(async (req, res) => {


   //catch data from form data
   const{name, email, password, books} =req.body;


   //user care validation
   if(!name || !email || !password) {
      res.status(200).json({message:"all fidels are required", user:null})
   }
   else{
   //sash password
   const hashPass = await bcrypt.hash(password, 10);

   //create user data
   const data = await User.create({name, email, password: hashPass, books});

   //create jwt token
   const token = jwt.sign({name, email}, process.env.JWT_SICRET, { 
      expiresIn: "10s"
   });

   //server response
   res.status(201).json({message:"user data create succesfull", user: data, token });

   }
    
}
)