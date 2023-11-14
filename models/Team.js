import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    name:{
        type:String,
        trim: true,
    }, 
},
{
    timestamps:true
});

export default mongoose.model("team", teamSchema);