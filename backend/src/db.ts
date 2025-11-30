import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL:any = process.env.MONGO_URL
mongoose.connect(MONGO_URL)

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
})

export const User= mongoose.model('User',userSchema)