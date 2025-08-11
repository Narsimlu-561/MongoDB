const express=require("express");
const app=express();
let port=8080;
const mongoose = require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError = require('./ExpressError');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended :true}));
app.use(methodOverride("_method"));

main()
  .then(()=>{
    console.log("connection successful")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
//root path
app.get("/",(req,res)=>{
  res.send("root is working")
});
//Index route
app.get("/chats",asyncWrap(async (req,res)=>{
  let chats=await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
}))
//new route
app.get("/chats/new",(req,res)=>{
  // throw new ExpressError(404,"page not found")
  res.render("new.ejs");
});

app.post("/chats",asyncWrap(async (err,req,res,next)=>{
      let {from,to,message}=req.body;
      let newChat=new Chat({
      from : from,
      to:to,
      message :message,
      created_at :new Date(),
  });

  await newChat.save();
  res.redirect("/chats");
}));

function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err))
  }
}
//NEW Show Rout
app.get("/chats/:id",asyncWrap(async (req,res,next)=>{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  if(!chat){
    throw new ExpressError(404,"chat not found");
  }
  res.render("edit.ejs",{chat});
}));

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
  try{
      let {id}=req.params;
      let chat=Chat.findById(id);
      res.render("edit.ejs",{chat});
  }catch(err){
    next(err)
  }
});

//update route
app.put("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  let {message : newMsg}=req.body;
  let updatedChat= await Chat.findByIdAndUpdate(
    id,
    {message :newMsg},
    {runValidators :true,new:true}
  )
  console.log(updatedChat);
  res.redirect("/chats");
})

//destroy route
app.delete("/chats/:id", asyncWrap(async (req,res)=>{
      let {id}=req.params;
      let deletedChat=await Chat.findByIdAndDelete(id);
      console.log(deletedChat);
      res.redirect("/chats");

}))

app.use((err,req,res,next)=>{
  console.log(err.name);
  next(err);
})
//Error Handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="some Error occured"}=err;
    res.status(status).send(message);
})

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})