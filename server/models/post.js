
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({

	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_topic: {type: mongoose.Schema.ObjectId, ref: 'Topic'},
	post: {type: String},
	comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
	created_at: {type: Date, default: Date.now},
	likes: {type: Number, default: 0},
	dislikes: {type: Number, default: 0}
})

mongoose.model("Post", PostSchema);
var deepPopulate = require('mongoose-deep-populate')(mongoose);
PostSchema.plugin(deepPopulate/* more on options below */);