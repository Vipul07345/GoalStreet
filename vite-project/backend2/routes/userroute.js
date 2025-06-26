import express from 'express'
import { CollegeRegisterPage, ContactUs, GetAllHRJobPosts, HRPage, HRPostPage, registerpage } from '../controllers/usercontroller'
import { Loginpage, SignUpPage } from '../controllers/pagecontroller'


const router = express.Router()

// router.route("/register").post(registerpage)
// router.route("/college").post(CollegeRegisterPage)
// router.route("/HR").post(HRPage)
// router.route("/ContactUS").post(ContactUs)
// router.route("/Login").post(Loginpage)
// router.route("/Signup").post(SignUpPage)
// router.route("/HRPostJob").post(HRPostPage)
// router.route("/HRPostJob").get(GetAllHRJobPosts);


export default router
