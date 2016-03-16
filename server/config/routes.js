


var quotes = require("../controllers/quotes.js");
module.exports = function(app){ //wrap all of your app requests into a function
	app.get("/", function(req, res){
		res.render("index")
	})
	app.post('/quotes', function(req, res){
		console.log("POST DATA", req.body);
		quotes.create(req, res)
	})
	app.get("/quotes", function(req, res){
		quotes.show(req, res)
	})
}
