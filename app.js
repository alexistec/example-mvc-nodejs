var express = require("express");
var app     = express();

//template views engine
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//controller
var home = require("./controller/home");
//routes
app.get("/",home)

app.listen(3000,function(){
	console.log("Servidor funcionando en el port 3000");
})
