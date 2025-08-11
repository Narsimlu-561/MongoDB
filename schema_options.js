const mongoose = require('mongoose');

main()
  .then((res)=>{
    console.log("connection successful !");
  })
  .catch(err => console.log(err));//if err catch then print

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=new mongoose.Schema({
  title : {
    type : String,
    required : true,
    minLength :1,
    maxLength :20
  },
  author : {
    type : String 
  },
  price : {
    type : Number ,
    min :1,
  },
  discount :{
    type :Number,
    default : 0
  } ,
  category :{
    type :String,
    enum :["fiction","non-fiction"],
  }, //validations
  genre :[String],
});

const Book=mongoose.model("Book",bookSchema);
let book1=new Book({
  title : "Marvel comics",
  price : 500,//err : -10 ,0
  category : "fiction"  //err :  comics 
})
book1.save()
  .then(res=>{
    console.log(res)
  }).catch(err =>{console.log(err)});

let book2=new Book({
  title : "Marvel comics v2",
  price : 600,//err : -10 ,0
  genre : ["comics","superheroes","fiction"]   
})
book2.save()
  .then(res=>{
    console.log(res)
  }).catch(err =>{console.log(err)});