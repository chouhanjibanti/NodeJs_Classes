const http = require("http");
const fs = require("fs");
const url = require("url");

// http://localhost:8000
// Date.now() -> unique id
// req.method -> GET , POST , Delete , PUT
// req.url -> /about , /contact-us , /signup
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.method}:${req.url}  New request comming \n`;
  const myUrl = url.parse(req.url, true); // object return nhi krega // queryparameter  https://www.youtube.com/results?search_query=masoom+sharma+

  fs.appendFile("test.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === 'GET') {
          res.end("HomePage");
        }
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`my name is ${userName}`);
        break;
      case "/contact-us":
        res.end("welcome to contact page");
        break;
    case "/signup":
        if(req.method=== 'GET'){
            res.end("signup successfully")
        }else if(req.method === 'POST'){
            res.end("success")
        }else{
            res.end("wrong method")
        }
           break;
           default:
            res.end("404 not found")
            break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("server started.......");
});
