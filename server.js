const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname)
})
app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The answer is "+ result);
})

app.get("/about", function(req, res){
    res.send("<h1>Hello World</h1><p>This is a nice course</p>")
})

app.get("/shapeai", function(req, res){
    res.send("<h1>ShapeAI</h1><p>This is a nice course</p>")
})

app.listen(3000, function(){
   console.log("Server has startedon port 3000")
});   