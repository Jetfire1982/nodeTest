const express = require('express');


const app = express();


app.get("/", function(req, res){
    res.send("<h2>Hello! This is express!</h2>")
})

app.get("/about", function(req, res){
    res.send("<h2>I want to say something about me</h2>")
})

app.get("/contact", function(req, res){
    res.send("<h2>Do you need some contacts!</h2>")
})

app.listen(5000);