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
    min :[1,"price is too low for amazon selling"],
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

Book.findByIdAndUpdate(
  "688087d6085a85506c176472",
  {price :-500},
  {runValidators :true}
)
  .then((res)=>{
    console.log(res);
  })
  .catch((err) =>{
    console.log(err.errors.price.properties.message)
  })
