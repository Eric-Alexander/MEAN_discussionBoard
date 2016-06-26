var mongoose = require('mongoose');

var TopicSchema = mongoose.Schema({

	title: {type: String},
	description: {type: String},
	category: {type: String},
	_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
	posts:[{type: mongoose.Schema.ObjectId, ref: 'Post'}],
	created_at: {type: Date, default: Date.now}
})

mongoose.model("Topic", TopicSchema);

var deepPopulate = require('mongoose-deep-populate')(mongoose);
TopicSchema.plugin(deepPopulate/* more on options below */);