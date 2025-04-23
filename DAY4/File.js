// write file 

const fs = require("fs")

// sync
// fs.writeFileSync("test.txt","my name is shubham")
// console.log("file is created")

// asynchronous
// fs.writeFile("ankit.txt","my namm is ankit",(err)=>{console.log(err)})
// console.log("file created")


// ==================================

// read file
// sync
// const result = fs.readFileSync("./ankit.txt","utf-8",)
// console.log(result)

// async
fs.readFile("./ankit.txt","utf-8",(err,data)=>{
   if(err)
   {console.log(err)}
   else{
    console.log(data)
   }
})

