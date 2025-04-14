import mongoose from "mongoose";
import  jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowewercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudinary url
        required:true,
    },
    coverImage:{
        type:String,//cloudinary url  
    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref: "Video"
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }
},{timestamps:true});
userschema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }

    this.password = bcrypt.hash(this.password, 10);
    next();
})
userschema.methods.checkpassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userschema.methods.generateaccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        useername:this.username,
        fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });

}
userschema.methods.generaterefreshToken = function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });

}
export const User = mongoose.model("User", userschema);