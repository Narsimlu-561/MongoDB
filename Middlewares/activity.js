const express=require("express");
const app=express();
const port=8080;

const checkToken=(req,res,next)=>{
  let {token}=req.query;
  if(token =="giveaccess"){
    next();
  } 
  throw new Error("ACCESS DENIED!");

};
app.get("/wrong",(req,res)=>{

})
app.get("/api",checkToken,(req,res)=>{
  abcd=abcd;
  res.send("data")
});
app.get("/",(req,res)=>{
  res.send("Hi, i am root")
});

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
});