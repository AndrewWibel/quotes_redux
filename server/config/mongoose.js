var mongoose = require("mongoose");
var path = require("path");
var fs = require('fs');// require fs module to load model files
mongoose.connect('mongodb://localhost/quotes');// connect to mongodb
var models_path = path.join(__dirname, "./../models");
// create a variable that points to the path of all of the models
fs.readdirSync(models_path).forEach(function(file){// read all of the files in the models_path and run each of the files with a .js
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file);
	}
})