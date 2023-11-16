var express = require('express');
var router = express.Router();
const userModal = require("./users");
const postsModal = require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/alluserpost', async function(req, res, next) {
  let user = await userModal.findOne({_id: "655461d8f0f0b2539b8e669b"})
  .populate('posts') 
  res.send(user);
});
router.get('/createuser', async function(req, res) {
  let createduser = await userModal.create({
    username :"anand",
    password : "anand",
    posts : [],
    email:"anand@gmail.com",
    fullName : "Anand mohan"
  });
  res.send(createduser);
});

router.get('/createpost', async function(req,res){
  let createdpost = await postsModal.create({
    postText: "hello kaise ho",
    user : "655461d8f0f0b2539b8e669b",
  });
  // res.send(createdpost);
  let user = await userModal.findOne({_id : "655461d8f0f0b2539b8e669b"});
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");
})

module.exports = router;
