const express = require("express")

const app = express();// app initialize 

const dotenv = require("dotenv")

const router = require("./Routes/student.routes")

// db connect 
const db = require("./config/dbConfig")

// enviornment variable 
dotenv.config();
const PORT = process.env.PORT;

// middleware
app.use(express.json()) // json -> convert -> js object  

// router
app.use("/api",router)


app.listen(PORT , ()=>{
    console.log(`my server is stared on port ${PORT}`);
})



