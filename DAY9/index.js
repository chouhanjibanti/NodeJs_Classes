// npm init -y                // npm install express
const express = require("express"); // import

const app = express(); // we will create the express app , initialize the app

app.get("/",(req,res)=>{
    return res.send("welcome to homepage")
});

app.get("/about",(req,res)=>{ // /about?name=ankit&age=23
    return res.send("welcome to about page "+" hey "+ req.query.name + "your age : "+req.query.age)
})

app.listen(5000, () => {
  console.log("server started.....ho gya.");
});

// https://www.youtube.com/results?search_query=masoom+sharma+
