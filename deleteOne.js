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

  // User.deleteOne({name :"Adam"})
  // .then((res)=>{
  //   console.log(res);
  // })

  // User.findOneAndDelete({age : 30})
  //   .then((res)=>{
  //   console.log(res);
  //   })
  User.findByIdAndDelete("687f7324f1911d12e218c16e")
    .then((res)=>{
    console.log(res);
    })