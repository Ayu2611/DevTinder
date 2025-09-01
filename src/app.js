const express = require('express');

const app = express();

/*app.use("/",(req,res)=>{
res.send("helo from new route")
})*/


app.use("/",(req,res)=>{
res.send("be.")
})
/*app.use((req,res)=>{
    res.send("helloo")
}) */

app.listen(3000,()=>{
    console.log("running")
})