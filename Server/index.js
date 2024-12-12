const express = require("express");
const cors =require("cors");
const Signup= ("../Server/model/signup")
const userRoute=require("./Routes/userRoutes");
const mongoose = require("mongoose");

const app=express();

mongoose
.connect("mongodb://localhost:27017")
.then(() => console.log("mongoodb connected successfully"))
.catch((error) => console.log(error));


app.use(express.json());

const corsOptions ={
    origin:["http://localhost:5173/","http://localhost:5173"],
    methods:["POST","GET"],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true,
};

app.use(cors(corsOptions));


app.get("/",(req,res)=>{
    res.send("hello world");
});


app.use("/user",userRoute)
app.listen(3000,()=>{
    console.log("Server is running");
});