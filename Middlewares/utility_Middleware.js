const express=require("express");
const app=express();
let port=8080;

app.use((req,res,next)=>{
  req.time=Date.now();
  // req.time=new Date(Date.now()).toString();
  console.log(req.method,req.hostname,req.path,req.time);
  next();
});

app.get("/",(req,res)=>{
  res.send("Hi, i am root")
})

app.get("/random",(req,res)=>{
  res.send("this is a random page !")
})

app.listen(port,(req,res)=>{
  console.log(`server is listening on port ${port}`);
})