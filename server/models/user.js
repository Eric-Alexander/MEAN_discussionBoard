var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	name: {type: String},
	posts: [{type: mongoose.Schema.ObjectId, ref:'Post'}],
	comments: [{type: mongoose.Schema.ObjectId, ref:'Comment'}],
	topics: [{type: mongoose.Schema.ObjectId, ref:'Topic'}],
	created_at: {type: Date, default: Date.now}
})

mongoose.model("User", UserSchema);