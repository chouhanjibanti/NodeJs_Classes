const mongoose = require("mongoose")
const {type} = require("os")

const validator = require("validator")

const  studentSchema= new mongoose.Schema(
    {
     userName:{
        type : String,
        required : true,
        trim : true,
     },
     email :{
         type: String,
         required : true,
         unique : [true,"Email is already Exists"],
        //  validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error ("Invalid Email")
        //     }
        //  }
     }  ,
     password:{
        type:String,
        required:true,
        minlength :8,
     },
     phone:{
        type:Number,
        required:true,
     },
     address:{
        type:String,
        required:true,
     }
}
);


 const student = mongoose.model("student",studentSchema)

 module.exports = student;


