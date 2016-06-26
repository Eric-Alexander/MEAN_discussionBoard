var mongoose = require ('mongoose');

var CommentSchema = new mongoose.Schema({

	content: {type: String},
	comment: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
	_commentParent: {type: mongoose.Schema.ObjectId, ref: 'Comment'},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	_post: {type: mongoose.Schema.ObjectId, ref:'Post'},
	created_at: {type: Date, default: Date.now}
})

mongoose.model("Comment", CommentSchema);