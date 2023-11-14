import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        trim: true
    },
    writter:{
        type: String,
        trim: true
    },
    photo: {
        type:String,
        trim: true,
        default: null
    }

},
{
    timestamps:true
});

export default mongoose.model("Book", bookSchema);