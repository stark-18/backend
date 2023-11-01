const express = require('express');
const app = express();

app.set("view engine","ejs");

app.use(express.static("./public"));

// 1. GET request to the homepage

app.get('/',function(req,res){
    res.render("index");
})


app.listen(3000);
