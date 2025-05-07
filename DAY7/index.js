//npm init -y  ->   npm i url                                   ->  http method :- GET and POST
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.method} ${req.url} New Request is coming.....\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("ankit.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET")
             res.end("HomePage");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`hi,${userName}`);
        break;
      case "/contact-us":
        res.end("welcome to home page");
        break;
      case "/signup":
        if (req.method === "GET") {
          res.end("This is a signup page");
        } else if (req.method === "POST") {
          res.end("success");
        }
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(3000, () => {
  console.log("server stared");
});
