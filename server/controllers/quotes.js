var mongoose = require("mongoose");// require mongoose as well as the schema defined on server.js
var Quotes = mongoose.model("Quotes")

module.exports = {
	show: function(req, res){
		Quotes.find({}, function(err, quotes){
		res.render("quotes", {quotes: quotes})
		})
	},
	create: function(req, res){
		quotes = new Quotes({name: req.body.name, quote: req.body.quote});
		quotes.save(function(err){
			errors_array = [];// create empty array to contain any errors if quote creation unsuccessful
			if(err){
				for(var x in err.errors){
					errors_array.push(err.errors[x].message);
				}
				res.redirect('/');
			}else{
				res.redirect('/quotes');
			}
		})
	}
}