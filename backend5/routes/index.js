var express = require('express');
var router = express.Router();
const userModel= require("./users")
/* GET home page. */


router.get('/', function(req, res, next) {
  req.session.ban = true;// creating session
  res.render("index");
});

router.get("/checkban",function(req, res){
  if (req.session.ban == true){
  console.log(req.session);
  res.send("you are banned");}
  else{
    res.send("not banned");
  }
})

// deleting session

router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.send(" ban removed")
  })
});

//creating cokies
router.get("/cookies",function(req,res){
  res.cookie("age", 25);
  res.render("index");
})
// reading cookies
router.get("/readcookies",function(req,res){
  console.log(req.cookies.age);
  res.send("check");
})
//deleting cookies
router.get("/deletecookies",function(req,res){
  res.clearCookie("age");
  res.send("clear ho gyi");
})
router.get('/create', async function(req, res) {
  const createduser = await userModel.create({
    username : "anand",
    age : 20,
    name : "anand"
  });
  res.send(createduser);
});

router.get('/users', async function(req,res){
  let all = await userModel.findOne();
  // console.log(allusers);
  res.send(all);
})
router.get('/allusers', async function(req,res){
  let allusers = await userModel.findOne({ username:"anand"});
  // console.log(allusers);
  res.send(allusers);
})
router.get('/delete', async function(req,res){
  let deleteduser = await userModel.findOneAndDelete({
    username:"anand"
  });
  // console.log(allusers);
  res.send(deleteduser);
})



module.exports = router;
