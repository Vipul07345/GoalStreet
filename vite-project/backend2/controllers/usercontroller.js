import {  ApplyJob, College, Contact, Foundation, Growth, HR, HRpostpage, User } from "../Models/user.js"

export const registerpage = async(req,res)=>{
    try {
        const {FullName,Mobile,CollegeEmail,CollegeName,PassingYear ,Domain1,Domain2}=req.body;
        if(!FullName || !Mobile ||!CollegeEmail || !CollegeName || !PassingYear|| !Domain1){
            return res.status(400).json({
                message:"Required details are missing",
                success:false
            })
        }
        const Email = await User.findOne({CollegeEmail});
        if(Email){
            return res.status(400).json({
                message:"Email already Exist",
                success:false
            })
        }
        await User.create({
            FullName,
            Mobile,
            CollegeEmail,
            CollegeName,
            PassingYear,
            Domain1
    
        })
        return res.status(200).json({
            message:"profile created",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }
    
}

export const CollegeRegisterPage = async(req,res)=>{
    try {
        const{CollegeName,ContactName,ContactMobile,ContactEmail}=req.body;
        if(!CollegeName || !ContactName || !ContactMobile || !ContactEmail){
            return res.status(400).json({
                message:"required details are missing",
                success:false
            })

        }
        const phonenumber = await College.findOne({ContactMobile});
        if(phonenumber){
            return res.status(400).json({
                message:"your data already exists",
                success:false
            })
        }

        await College.create({
            CollegeName,
            ContactName,
            ContactMobile,
            ContactEmail

        })
        return res.status(200).json({
            message:"college Registation has completed successfully",
            success:true
        })

        
        
    } catch (error) {
        console.log(error)
        
    }
}

export const HRPage = async(req,res)=>{
    try {
        const{HRFullName,CompanyName,MobileNumber,CompanyEmail,Industry,Salary,CompanySize}=req.body;
        if(!HRFullName || !CompanyName|| !MobileNumber || !CompanyEmail||!Industry||!Salary||!CompanySize){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        const company = await HR.findOne({CompanyName});
        if(company){
            return res.status(400).json({
                message:"Company name already exists",
                success:false
            })
        }
        await HR.create({
            HRFullName,
            CompanyName,
            MobileNumber,
            CompanyEmail,
            Industry,
            Salary,
            CompanySize

        })
        return res.status(200).json({
            message:"Hr registration has completed successfully",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }

}

export const HRPostPage = async(req,res)=>{
    try {
        const{PostedOnDate,Title,Company,Salary,Type,Duration}=req.body;
        if(!PostedOnDate||!Title||!Company||!Salary||!Type||!Duration){
            return res.status(400).json({
                message:"required details are missing",
                success:false
            })
        }
        await HRpostpage.create({
            PostedOnDate,
            Title,
            Company,
            Salary,
            Type,
            Duration
        })
        return res.status(200).json({
            message:"Your job has been posted successfully",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const GetAllHRJobPosts = async(req,res)=>{
    try {
        const jobs = await HRpostpage.find({}); // Fetch all documents from the HRpostpage collection
        return res.status(200).json(jobs); // Send the array of jobs as JSON
    } catch (error) {
        console.log(error); // Log error for debugging
        return res.status(500).json({
            message: "Error fetching job posts",
            success: false,
            error: error.message // Include error message for debugging
        });
    }
}

export const ContactUs = async(req,res)=>{
    try {
        const{YourEmail,Message}=req.body;
        if(!YourEmail || !Message){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        await Contact.create({
            YourEmail,
            Message
        })
        return res.status(200).json({
            message:"Submitted successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
        
    }
}

export const Applyjobpage = async(req,res)=>{
    try {
        const{fullname,email,phone,address,education,experience,skills,resume}=req.body;
        if(!fullname||!email||!phone||!address||!education||!skills||!resume){
            return res.status(400).json({
                message:"required details are missing",
                success:false
            })
        }
        await ApplyJob.create({
            fullname,
            email,
            phone,
            address,
            education,
            experience,
            skills,
            resume,
        })
        return res.status(200).json({
            message:"your application was successfull",
            success:true
        })
        
    } catch (error) {
        console.log(error)
    }
}
   
export const GrowthPage = async(req,res)=>{
    try {
        const{fullname,fathername,contactnumber,emailid,course,joining,paymode}=req.body;
        if(!fullname||!fathername||!contactnumber||!emailid||!course||!joining||!paymode){
            return res.status(400).json({
                message:"required details are missing",
                success:false
            })
        }
        await Growth.create({
            fullname,
            fathername,
            contactnumber,
            emailid,
            course,
            joining,
            paymode,
        })
        return res.status(200).json({
            message:"submittion successfull",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }

}

export const FoundationPage = async(req,res)=>{
    try {
        const{fullname,fathername,contactnumber,emailid,course,joining,paymode}=req.body;
        if(!fullname||!fathername||!contactnumber||!emailid||!course||!joining||!paymode){
            return res.status(400).json({
                message:"required details are missing",
                success:false
            })
        }
        await Foundation.create({
            fullname,
            fathername,
            contactnumber,
            emailid,
            course,
            joining,
            paymode,
        })
        return res.status(200).json({
            message:"submittion successfull",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }

}