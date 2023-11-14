import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

/**
 * @DECS aouthentication user
 * @ROUTER /api/v1/login
 * @METHOD post
 * @ACCESS PUBLIC
 */
export const loginUserAuth = asyncHandler(async (req, res) => {

  const {email, password } = req.body;

  // user validation
  if(!email || !password){
    return res.status(400).json({message:"all field are requried"})
  }

// check user email
const loginUser = await User.findOne({email});

if(!loginUser){
    return res.status(404).json({message: "Invalid Email address"})
}

const passCheck = await bcrypt.compare(password, loginUser.password);

if(!passCheck){
    return res.status(400).json({message: " Wrong password"});
}

//access token
const accessToken = jwt.sign({email: loginUser.email}, process.env.JWT_SICRET, { 
    expiresIn: "7d"
 });

 //seasion token in cookie memory
 res.cookie("accessToken", accessToken)

res.status(200).json({message: `${loginUser.name} you are successully login`, user: loginUser, token: accessToken})

}
);

/**
 * @DECS aouthentication user
 * @ROUTER /api/v1/login
 * @METHOD post
 * @ACCESS PUBLIC
 */
export const logoutUserAuth = asyncHandler(async (req, res) => {


  res.clearCookie("accessToken")
  
  res.status(200).json({message: `you are logout successully`})
  
  }
  );
  