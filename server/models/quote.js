var mongoose = require("mongoose");

var QuotesSchema = new mongoose.Schema({
	name: String,
	quote: String,
	date: {type: Date, default: Date.now},
});
mongoose.model("Quotes", QuotesSchema)
var Quotes = mongoose.model("Quotes")
// make quotes schema