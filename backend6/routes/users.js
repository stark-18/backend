const mongoose =  require("mongoose");
const plm = require("passport-local-mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/testing")

const userSchema = mongoose.Schema({
   username : String,
   nickname : String,
   secret : String,
  //  categories : {
  //     type : Array,
  //     default : []

  //   },
  //   datecreated :{
  //     type : Date ,
  //     default : Date.now()
  //   },
     
});
userSchema.plugin(plm);
module.exports = mongoose.model("users", userSchema);