const express=require("express");
const app=express();
let port=8080;

app.use((req,res,next)=>{
  console.log("Hi i am 1st middleware");
  next();
})

app.use((req,res,next)=>{
  console.log("Hi i am 2nd middleware");
  next();
});

app.get("/",(req,res,next)=>{
  console.log("Hi i am root");
  next();
});

app.get("/random",(req,res)=>{
  res.send("this is a random page");
});

app.listen(port,(req,res)=>{
  console.log(`server is listening on port ${port}`);
})