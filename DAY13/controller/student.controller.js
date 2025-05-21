const model = require("../Models/student.model")
const bcryptjs = require("bcryptjs")
const validator = require("validator")
const mongoose = require("mongoose")

// registerMethod
const registrationController = async (req,res)=>{
    try {
        let {userName , email , password , phone , address}= req.body;

        // validate before hashing 
    
    } catch (error) {
        
    }
}