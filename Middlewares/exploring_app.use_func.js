const express=require("express");
const app=express();
let port=8080;

app.use((req,res)=>{
  res.status(404).send("page not found !");
})

app.get("/",(req,res)=>{
  res.send("Hi, i am root")
})
app.use((req,res)=>{
  res.send(`Page not found !`)
})
app.listen(port,(req,res)=>{
  console.log(`server is listening on port ${port}`);
})