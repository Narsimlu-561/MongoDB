const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main() 
  .then(()=>{
    console.log("connection successful")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats=[
  {
    from :"neha",
    to :"priya",
    message :"send me your resume",
    created_at :new Date()
  },
  {
    from :"rohit",
    to :"preeti",
    message :"send me JS callacks",
    created_at :new Date()
  },
  {
    from:"anita",
    to :"peter",
    message :"bring me some fruits",
    created_at : new Date()
  },
  {
    from : "tony",
    to : "peter",
    message : "I Love You 3000",
    created_at :new Date()
  }
]

Chat.insertMany(allChats);