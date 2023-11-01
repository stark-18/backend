const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://stark1980:anand1980r@cluster0.33mufcj.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");

const userschema = mongoose.Schema({
  username : String,
  name : String,
  age  : Number
})
 module.exports = mongoose.model("user", userschema);  

