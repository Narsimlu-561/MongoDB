const mongoose = require('mongoose');

main()
  .then((res)=>{
    console.log("connection successful !");
  })
  .catch(err => console.log(err));//if err catch then print

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
});

const User=mongoose.model("User",userSchema);
const user1=new User({
  name :"Adam",
  email : "adam@yahoo.in",
  age : 48
});
const user2=new User({
  name : "Eve",
  email : "eve@google.com",
  age : 48
});

user1.save();
user2.save().then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });