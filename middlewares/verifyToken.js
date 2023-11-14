
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";



export const verifyToken =(req, res, next) => {

    const {accessToken} = req.cookies;

    //console.log("hello verifytoken")

    //check access token
    if(!accessToken){
        return res.status(401).json({message: "Unauthorized"});
    };



    jwt.verify (accessToken, process.env.JWT_SICRET, asyncHandler(async (error, decode )=>{
        if(error) {
            return res.status(400).json({message:"invalid Token"})
        };
        next();
    })
    );



};