const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const URL = process.env.MONGO_URL;

const connectDb = mongoose.connect(URL).then(()=>{
    console.log("DB Connected Successfully");
}).catch(()=>{
    console.log("DB connection failed");
})

module.exports = connectDb;

// npm install dotenv
// npm install express
// npm install os
// npm install validator
// npm install mongoose 
