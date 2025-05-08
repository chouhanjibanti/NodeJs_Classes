const express = require("express")   // npm init -y // npm install express //  npm install mongoose 
const fs = require("fs")
const mongoose = require("mongoose")


// app initi.
const app = express();
const PORT = 8000; // port

// connection
// we will connect through mongoose
mongoose.connect("mongodb://127.0.0.1:27017/debugshala")
.then(()=>{ console.log("connected to database")})
.catch((err)=>{ console.log("mongo erro",err)})


// we will create the schema 
const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
        },
        email:{
            type: String,
            required:true,
            unique:true,
        },
        jobTitle :{
            type:String,
        },
        Gender:{
            type:String,
        },
    },
    { timestamps :true}
)

// model create
const User = mongoose.model("user",userSchema)


// middleware 
app.use(express.urlencoded({extended:false}))  // To parse URL-encoded bodies
app.use(express.json());  


// second middleware
app.use((req,res,next)=>{
    console.log("from second middleware")
    next();
})

// third middle 
app.use((req,res,next)=>{
    fs.appendFile("test.txt",`\n ${Date.now()}: ${req.method} : ${req.path}\n`,(err)=>{
        if(err){console.log("error in appending file",err)}
        next();
    })
})

// restAPI

// post
app.post("/api/users", async (req,res)=>{
   const body =  req.body;
   if(
    !body || 
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.jobTitle ||
    !body.Gender
   ){
    return res.status(400).json({msg:"all field are required"})
   }
   const result = await User.create({
       firstName : body.firstName,
       lastName : body.lastName,
       email : body.email,
       jobTitle : body.jobTitle,
       Gender: body.Gender,
   });
   return res.json(200).json({msg: result})
})


// get
app.get("/api/users", async (req,res)=>{
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
})

// port
app.listen(PORT,()=>{
    console.log(`server started.......${PORT}`)
})
