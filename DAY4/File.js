// write file

const fs = require("fs");

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
// fs.readFile("./ankit.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// ==================================

// appendfile :- By using this file we can add content in the existing file

// fs.appendFileSync("./test.txt","\n i am minhaz")
// console.log("append success")

// async
// fs.appendFile("./test1.txt,","i am from debugshala",(err)=>{
//    if(err){
//       console.log("Error: ",err)
//    }
//    else{
//       console.log("content appended successfully")
//    }
// })

// =======================================

// sync
// fs.copyFileSync("./test1.txt,","./ankit.txt")
// console.log("copy file success")

// fs.copyFile("./test1.txt," ,"./shubham.txt",(err)=>{
//    if(err){
//             console.log("Error: ",err)
//          }
//          else{
//             console.log("content copied successfully")
//          }
// })

// =======================================

// unlink :- if i want tpo delete the file i can use unlink

// fs.unlinkSync("./shubham.txt")
// console.log("deleted")

// fs.unlink("./ankit.txt",(err)=>{
//    if(err){
//                   console.log("Error: ",err)
//                }
//                else{
//                   console.log("file deleted successfully")
//                }
// })

// =======================================

// mkdir :- by using this we can create the directory / folder

// sync
// fs.mkdirSync("my-app/a/b",{recursive : true});
// console.log("mkdir completed")

// async
fs.mkdir("m-app1", { recursive: true }, (err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("folder created  successfully");
  }
});
