import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoschema = new mongoose.Schema({
    videoFile:{
        type:String,//cloudinary url
        required:true
    },
    thumnail:{
        type:String, 
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
videoschema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoschema);