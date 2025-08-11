//Schema validations

const mongoose = require('mongoose');

main()
  .then((res)=>{
    console.log("connection successful !");
  })
  .catch(err => console.log(err));//if err catch then print

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// const userSchema=new mongoose.Schema({
//   name : String,
//   email : String,
//   age : Number,
// });
const bookSchema=new mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  author : {
    type : String 
  },
  price : {
    type : Number 
  }  //validations
});

const Book=mongoose.model("Book",bookSchema);
let book1=new Book({
  title : "Mathematics XII",
  author : "RD Sharma",
  price : 1200
})
book1.save()
  .then(res=>{
    console.log(res)
  }).catch(err =>{console.log(err)});