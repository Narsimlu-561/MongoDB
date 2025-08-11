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

const User=mongoose.model("User",userSchema)

User.updateOne({age : {$gt :48}},{age : 55})
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });

  User.updateMany({age : {$gt :45}},{age : 55})
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  });