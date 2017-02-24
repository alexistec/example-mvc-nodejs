var express = require("express");
var home    = express();

home.get("/",function(request,response){
	response.render("home.html");
});

module.exports = home;
