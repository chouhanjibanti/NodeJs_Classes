const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log1 = `${Date.now()}:${req.url} New Request Rec....\n`;
  fs.appendFile("log.txt", log1, (error, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("welcome to about page");
        break;
      case "/contact-us":
        res.end("welcome to contact page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(3000, () => {
  console.log("server started");
});
