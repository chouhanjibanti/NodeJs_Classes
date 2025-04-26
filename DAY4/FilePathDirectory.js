// example : working with directories and file path 

const fs = require("fs")
const path = require("path")

// creating a directory 

const dirPath = path.join(__dirname,"exampleDir")
// __dirname :- current folder where your js is running 

fs.mkdir(dirPath,{recursive : true} , (err)=>{// recursive :- if parent folder doesn't exist it will create it to 

  if (err) {
    console.log("error :",err)
  } else {
    console.log("folder created successfully")
  }
}) 


// reading the folder/ directory

fs.readdir(__dirname,(err,files)=>{
    if(err){
        console.log("error :",err)
    }else{
        console.log("files in the directory :",files)
    }
})