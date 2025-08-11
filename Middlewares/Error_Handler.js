const express=require("express");
const app=express();
const port=8080;
const ExpressError=require("./expressError");

const checkToken=(req,res,next)=>{
  let {token}=req.query;
  if(token ==="giveaccess"){
    next();
  } 
  throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api",checkToken,(req,res)=>{
  res.send("data");
})
app.get("/",(req,res)=>{
  res.send("Hi, i am root.")
});

app.get("/random",(req,res)=>{
  res.send("this is a random page")
})

app.get("/err",(req,res)=>{
  abcd=abcd;
});

app.use((err,req,res,next)=>{
  let {status=500,message="some error occured"}=err;
  res.status(status).send(message);
})
// app.use((err,req,res,next)=>{
//   let {status,message}=err;
//   res.status(status).send(message);
// })

// app.use((req,res)=>{
//   res.status(404).send("page not found !")
// });

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
});