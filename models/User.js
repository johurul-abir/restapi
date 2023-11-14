import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        trim: true,
    },
    
   roll:{
    type :Number,
    trim: true,
    default: null
   },
   location:{
    type: String,
    trim: true,
    default: null
   },
   age:{
    type: Number,
    trim: true,
    default: null
   },
   group:{
    type: String,
    trim: true,
    default: null
   },
   clas:{
    type:String,
    trim: true,
    default: null
   },
   photo: {
    type: String,
    trim: true,
    default: null
   },
   books:{
    type:[mongoose.Schema.Types.ObjectId],
    ref: "Book",
    trim: true,
    default:[]
   },
   team:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Team",
    trim: true,
    default:null
   },

},
{
timestamps:true
}
);



//create user model
export default mongoose.model("User", userSchema);