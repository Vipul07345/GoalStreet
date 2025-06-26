// File: D:/React/vite-project/backend2/index.js

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './db.js';

import {
    Applyjobpage,
    CollegeRegisterPage,
    ContactUs,
    FoundationPage,
    GetAllHRJobPosts,
    GrowthPage,
    HRPage,
    HRPostPage,
    registerpage
} from './controllers/usercontroller.js';

import {
    Loginpage,
    SignUpPage
} from './controllers/pagecontroller.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/register', registerpage);
app.post('/api/college', CollegeRegisterPage);
app.post('/api/hr', HRPage);
app.post("/api/contact", ContactUs);
app.post("/api/login", Loginpage);
app.post("/api/signup", SignUpPage);
app.post("/api/applyjob",Applyjobpage);
app.post("/api/hrpostjob", HRPostPage);
app.get("/api/hrpostjob", GetAllHRJobPosts);
app.post("/api/growth",GrowthPage)
app.post("/api/foundation",FoundationPage)

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));