const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser") // form-data
const userRoutes = require("./routes/userRoutes")

const app = express();
const PORT = 8000

mongoose.connect("mongodb://127.0.0.1:27017/MVC").then(() => {
    console.log("mongoDb connected");
}).catch((err) => {
    console.log("Error connecting to mongoDb",err);
});


// middleware
app.use(bodyParser.urlencoded({extended:true}))

// set EJS as view Engine
app.set("view engine",ejs)

// routes
app.use("/",userRoutes)

// port
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})