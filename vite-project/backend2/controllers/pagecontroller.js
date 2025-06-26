import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SignUp } from '../Models/page.js'

const JWT_SECRET = process.env.SECRET_KEY || 'a_fallback_secret_key_for_development_only_CHANGE_THIS';

export const Loginpage = async(req,res)=>{
    try {
        const{LoginEmail,LoginPassword}=req.body;
        if(!LoginEmail||!LoginPassword){
            return res.status(400).json({
                message:"Email and password are required",
                success:false
            })
        }
        let user = await SignUp.findOne({ SignUpEmail: LoginEmail });
        if(!user){
            return res.status(400).json({
                message:"Invalid credentials",
                success:false
            })
        }
        const checkpassword = await bcrypt.compare(LoginPassword,user.SignUpPassword);
        if(!checkpassword){
            return res.status(400).json({
                message:"Invalid credentials",
                success:false
            })
        }
        const tokendata={
            userId: user._id,
            userEmail: user.SignUpEmail,
            userFullName: user.SignUpFullName
        }
        const token = await jwt.sign(tokendata,JWT_SECRET,{expiresIn:'1d'});
        return res.status(200).cookie("token",token,{
            maxAge:1*24*60*60*1000,
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:"strict"
        }).json({
            message:`Welcome back, ${user.SignUpFullName}`,
            success:true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message:"Internal server error during login",
            success:false
        })
    }
}

export const SignUpPage = async(req,res)=>{
    try {
        const{SignUpFullName,SignUpEmail,SignUpPassword,SignUpConfirmPassword}=req.body;
        if(!SignUpFullName || !SignUpEmail || !SignUpPassword || !SignUpConfirmPassword){
            return res.status(400).json({
                message:"Required details are missing",
                success:false
            })
        }
        if(SignUpPassword !== SignUpConfirmPassword){
            return res.status(400).json({
                message:"Passwords do not match",
                success:false
            })
        }
        const user = await SignUp.findOne({ SignUpEmail: SignUpEmail });
        if(user){
            return res.status(400).json({
                message:"Email already exists",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(SignUpPassword, 10);

        const newUser = await SignUp.create({
            SignUpFullName,
            SignUpEmail,
            SignUpPassword:hashedPassword,
        });

        const tokendata={
            userId: newUser._id,
            userEmail: newUser.SignUpEmail,
            userFullName: newUser.SignUpFullName
        }
        const token = await jwt.sign(tokendata,JWT_SECRET,{expiresIn:'1d'});

        return res.status(201).cookie("token",token,{
            maxAge:1*24*60*60*1000,
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:"strict"
        }).json({
            message:"Account created successfully",
            success:true,
            user: {
                id: newUser._id,
                fullName: newUser.SignUpFullName,
                email: newUser.SignUpEmail
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message:"Internal server error during signup",
            success:false
        })
    }
}

export const LogoutPage = async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{
            maxAge:0,
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:"strict"
        }).json({
            message:"Logged out successfully",
            success:true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message:"Internal server error during logout",
            success:false
        })
    }
}