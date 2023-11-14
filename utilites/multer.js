


import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname === "userphoto"){
            cb(null, "public/user");
        }else if(file.fieldname ==="bookphoto"){
            cb(null,"public/books" )
        }

        
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + "_" + Math.round(Math.random()*100000) + "_" + file.originalname ) 
    }
});

export const userPhoto = multer({storage}).single("userphoto");
export const bookMulter = multer({storage}).single("bookphoto");