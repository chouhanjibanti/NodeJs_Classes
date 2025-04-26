const http = require("http"); // import the http

// we will create thd server
const myServer = http.createServer((req,res)=>{
    console.log("New Req Coming....")
    console.log(req.headers)// isme hame req related metadata 
       console.log(req)
       res.end("my name is shubham")
});

myServer.listen(8000,()=>{ console.log("started server........")});

// http://localhost:8000