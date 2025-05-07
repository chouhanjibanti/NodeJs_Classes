const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 7000;

// Middleware for parsing form and JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Second middleware: simple logger
app.use((req, res, next) => {
  console.log("hello from second middleware");
  next();
});

// Third middleware: logs requests to a file
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()} : ${req.method} ${req.path}\n`,
    (err) => {
      if (err) {
        console.error("Error writing to log:", err);
      }
      next();
    }
  );
});

// app.get("/", (req, res) => {
//   res.send("Testing log.txt creation");
// });


// GET all users
// app.get("/api/users",(req,res)=>{
//   return res.json(users)
// })

// save data 
// app.post("api",(req,res)=>{
//     const body =  req.body;
//     users.push({...body, id :users.length+1}) // 1007+1 => 1008
//     fs.writeFile(`$(__dirname)/MOCK_DATA.json`,json.stringify(users),(err,data)=>{
//       return res.json({status: "successfully add" , id: users.length})

//     })
      
// })

// app.post("/api/users1", (req, res) => {
//   const body = req.body;
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile(
//     `${__dirname}/MOCK_DATA.json`,
//     JSON.stringify(users),
//     (err, data) => {
//       return res.json({ status: "success", id: users.length });
//     }
//   );
// });


// get id base

app.get("/api/users/:id",(req,res)=>{
     const id =  Number(req.params.id);
     const users1 = users.find((user)=> Number(user.id) === id) // 1008 ===1008
     return res.json(users1)
})

app.delete("/api/users/:id",(req,res)=>{
  console.log("deleted")
})
app.patch("/api/users/:id",(req,res)=>{
  console.log("updated")
})


app.listen(PORT, () => {
  console.log(`server started.......${PORT}`);
});

