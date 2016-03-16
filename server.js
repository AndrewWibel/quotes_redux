var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./client/static")));
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");
// use static files & use ejs templates in /views folder

require("./server/config/mongoose.js")
// require the mongoose.js file for all of our DB stuff


var routes_setter = require("./server/config/routes.js");
routes_setter(app);// store the routes setter function in a variable and then invoke it


app.listen(9001, function(){
	console.log("server is over 9000");
})