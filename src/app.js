const express = require('express');

const app = express();

/*app.use("/",(req,res)=>{
res.send("helo from new route")
})*/

/*app.use((req,res)=>{
    res.send("helloo")
}) */
app.get("/user",(req,res)=>{
    res.send("user route using get method")
})
app.post("/user",(req,res)=>{
    res.send("user sending data using post method")
})
app.delete("/user",(req,res)=>{
    res.send("user deleted using dlete route method")
})



app.listen(3000,()=>{
    console.log("running")
})