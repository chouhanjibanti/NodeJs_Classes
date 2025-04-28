const http = require("http")
const fs = require("fs")
const url = require("url")// npm i url

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} new request coming ....\n`
    const myUrl = url.parse(req.url,true) // we will parse the url into string  // url.parse(req.url,true) will accept two argument first one is url string second one is true
    console.log(myUrl)  // till when will true pass as an argument tab tak hame as a object return nhi krega [queryString ko bhi pass krna hai isliye true pass kiya isme ]

    fs.appendFile("test.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
            res.end("homepage")
            break;
            case "/about":
                const userName = myUrl.query.myName;
                res.end(`hi ,${userName}`)
            break;
            case "/contact-us":
            res.end("welcome to contact page")
            break;
            default:
                res.end("404 not found")
        }
    })
})

myServer.listen(8000,()=>{
    console.log("server started............")
})