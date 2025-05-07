const express = require("express") // import
const fs = require("fs") // import
const users = require("./MOCK_DATA.json") // import

const app = express(); // app initialize
const PORT = 8000; // port number

// middleware // plugin   -> every request  run on every plugin -> ye plugin postman se data get krega or javsscript object and  data insert insert req.body
app.use(express.urlencoded({extended:false}))

app.get("/api/users",(req,res)=>{
    return res.json(users)
})

// server listen
app.listen(PORT,()=>{
    console.log(`server started.........on port ${PORT}`)
})
