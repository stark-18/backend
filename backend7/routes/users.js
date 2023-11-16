// const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/backend7");

// const userSchema = new mongoose.Schema({
//   username :{
//     type : String,
//     required : true,
//     unique  :true,
//   },
//   password : {
//     type : String,
//     required : true,
//   },
//   posts : [],
//   dp: {
//     type: String
//   },
//   email:{
//     type : String,
//     required : true,
//     unique  :true,
//   },
//   fullname : { 
//     type : String,
//     required : true,
//   },
// });
// mongoose.exports = mongoose.model('user', userSchema);
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/backend77");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Post',
  }],
  dp: {
    type: String, // You might want to store the file path or URL of the profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);
module.exports = mongoose.model('User', userSchema);


