//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { request } = require("express");
const _ = require("lodash");


const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){

  res.render("home");

});

app.get("/service",function(req,res){
    res.render("service");
});

app.get("/blog",function(req,res){
    res.render("blog");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.get("/contact",function(req,res){
    res.render("contact");
});

app.get("/search",function(req,res){
    res.render("search");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  