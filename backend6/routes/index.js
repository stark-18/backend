const express = require('express');
const router = express.Router();

const userModel = require("./users");
const passport = require("passport");
const localstrategy = require("passport-local");
const app = require('../app');

passport.use(new localstrategy(userModel.authenticate()));

 
router.get('/', function(req, res) {
  res.render('index');
});
 
router.get('/profile', isLoggedIn ,function(req, res) {
  res.render('profile');
});

router.post('/register', function(req, res) {
  var userdata = new userModel({
    username : req.body.username,
    // password : req.body.password,
    secret : req.body.secret,
  });
  userModel.register(userdata, req.body.password)
  .then(function( registereduser){
    passport.authenticate("local")(req, res, function(){
      res.redirect('/profile');
    })
  })
  
});

router.post('/login',isLoggedIn , passport.authenticate("local",{
  successRedirect : "/profile",
  failureRedirect : "/"
}),function(req,res){

});
router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
 })
 function isLoggedIn(req,res,next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

// router.get('/create',async function(req, res) {
//   let userdata = await usersModel.create({
//     username : "Ansh",
//     nickname : "asyncjavascriptor",
//     description : "i am a guy of 20 and I love js, node and react.",
//      categories : ['fashion', 'life', 'science'],
     
//   });
//   res.send(userdata);
// });


// // case sensitive search in mongoose
// router.get('/find', async function(req,res){
//   let regex= new RegExp("^anshika$",'i') //new RegExp (search, flags);
//   // for exact same word use ^word$
//   let findUserData = await usersModel.findOne({username: regex});
//   res.send(findUserData);
// });

// //find documents where an array field contains all of a set of values
// router.get('/find2', async function(req,res){
//   let findUserData = await usersModel.find({categories:{$all : ['js'] }});
//   res.send(findUserData);
// });

// //search for documents with a specific date range in mongoose?
// router.get('/finddate', async function(req,res){
//   let date1 = new Date('2023-11-05');
//   let date2 = new Date('2023-11-06');
//   let findUserData = await usersModel.find({categories:{$all : ['js'] }});
//   res.send(findUserData);
// });

// //I filter documents based on the existence of a field in Mongoose?
// router.get('/findfield', async function(req,res){
//   let findUserData = await usersModel.find({nickname:{ $exists: true}});
//   res.send(findUserData);
// });

// //filter documents based on a specific field's length in Mongoose?
// router.get('/findlength', async function(req,res){
//   let findUserData = await usersModel.find({
//     $expr :{
//       $and: [
//         {$gte :[{$strLenCP : '$nickname'},0]},
//         {$lte :[{$strLenCP : '$nickname'},122]} 
//       ]
//     }
//    });
//    res.send(findUserData);
//   });





// flash message allows us to use the data created in any route into the other route 
// router.get('/failed', function(req,res){
//   // req.flash("age", 12);
//   // req.flash("name", "anand");
//   res.send("bamngya");
// });
// // router.get('/checkkaro',function(req,res){
// //   console.log(req.flash("age"),req.flash("name")); 
// //   res.send("check karo terminal pe");
// // })

module.exports = router;
