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
User.insertMany([
  {name :"Tony",email :"tony@gmail.com",age :50},
  {name:"Peter",email : "peter@gmail.com",age:30},
  {name :"Bruce",email :"bruce@gmail.com",age:47 }
]).then((res)=>{
  console.log(res);
})
