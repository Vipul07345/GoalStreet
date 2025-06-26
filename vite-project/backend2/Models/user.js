import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true
    },
    CollegeEmail:{
        type:String,
        required:true,
        unique:true
    },
    CollegeName:{
        type:String,
        required:true
    },
    PassingYear:{
        type:String,
        required:true
    },
    Domain1:{
        type:String,
        required:true
    },
    Domain2:{
        type:String
    }
 },{timestamps:true});
 export const User = mongoose.model('user',userSchema)

const CollegeSchema = mongoose.Schema({
    CollegeName:{
        type:String,
        required:true
    },
    ContactName:{
        type:String,
        required:true
    },
    ContactMobile:{
        type:String,
        required:true
    },
    ContactEmail:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});
export const College = mongoose.model("college",CollegeSchema)

const  HrSchema = mongoose.Schema({
    HRFullName:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    MobileNumber:{
        type:String,
        required:true
    },
    CompanyEmail:{
        type:String,
        required:true,
        unique:true
    },
    Industry:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
        required:true
    },
    CompanySize:{
        type:String,
        required:true
    }
},{timestamps:true})

export const HR = mongoose.model("hr",HrSchema)

const  HrPostSchema = mongoose.Schema({
    PostedOnDate:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Company:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    Duration:{
        type:String,
        required:true
    }

},{timestamps:true})
export const HRpostpage = mongoose.model("HRPage",HrPostSchema)


const ContactSchema = mongoose.Schema({
    YourEmail:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
},{timestamps:true})
export const Contact = mongoose.model("Contact",ContactSchema)

const ApplyJobSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    education:[{
        degree:{
            type:String,
            required:true
        },
        institution:{
            type:String,
            required:true
        },
        year:{
            type:String,
            required:true
        }
    }],
    experience:[{
        company:{
            type:String
        },
        jobTitle:{
            type:String
        },
        years:{
            type:String
        }
    }],
    skills:{
        type:[String],
        required:true
    },
    resume:{
        type:String,
        required:true
    },
},{timestamps:true})

export const ApplyJob = mongoose.model("Applyjobpage",ApplyJobSchema)

const GrowthSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    contactnumber:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    joining:{
        type:String,
        required:true
    },
    paymode:{
        type:String,
        required:true
    }
})

export const Growth = mongoose.model("GrowthPage",GrowthSchema)

const FoundationSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    contactnumber:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    joining:{
        type:String,
        required:true
    },
    paymode:{
        type:String,
        required:true
    }
})
export const Foundation = mongoose.model("Foundationpage",FoundationSchema)

