//const express = require('express')
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import companyRoute from "./routes/companyRoutes.js";
import jobRoute from "./routes/jobRoutes.js";
import applicationRoute from "./routes/applicationRoutes.js";

const app = express();

//connecting to database
connectDB();

//middlewares
const corsOptions = {
    origin:'https://job-space-project-frontend.vercel.app', // this is for vite
    methods: ["POST","GET","PUT"],
    credentials:true
}
app.use(cors({
    origin:'https://job-space-project-frontend.vercel.app', // this is for vite
    methods: ["POST","GET","PUT"],
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("Hello World!")
})

//api's 
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
