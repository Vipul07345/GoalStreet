import mongoose from "mongoose";

const SignupSchema=mongoose.Schema({
    SignUpFullName:{
        type:String,
        required:true
    },
    SignUpEmail:{
        type:String,
        required:true,
        unique:true
    },
    SignUpPassword:{
        type:String,
        required:true,
    }
},{timestamps:true})
export const SignUp = mongoose.model("SignUp",SignupSchema)

const LoginSchema = mongoose.Schema({
    LoginEmail:{
        type:String,
        required:true,
        unique:true
    },
    LoginPassword:{
        type:String,
        required:true
    }
},{timestamps:true})
export const Login = mongoose.model("Login",LoginSchema)