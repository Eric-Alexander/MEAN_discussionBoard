var mongoose = require("mongoose");
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');

module.exports = function(){
	return{
		index: function(req, res){
			Topic.find({}).populate('_user').exec( function(err, allTopics){
				if(err){
					console.log(err);
				}else{
					// console.log(allTopics);
					res.json(allTopics);
				}
			})
		},
		create: function(req, res){
			console.log(req.body);
			var topic = new Topic({_user: req.body.user._id, title: req.body.title, description: req.body.description, category: req.body.category})
			topic.save(req.body, function(err, newTopic){
				if(err){
					console.log(err+"  ====PErmission Denied+++")
				}else{
					User.findByIdAndUpdate({_id: topic._user}, {$push: {topics: topic._id}}, function(err, doc) {})
					console.log('Topic was INSERTED INTO DATABSE');
					res.json(newTopic)
				}
			})

		},
		show: function(req, res){
			Topic.findOne({_id: req.params.id}).deepPopulate(['posts._user','posts.comments._user', '_user'])
			.exec(function(err, topic){
				if(err){
					console.log(err+'O POSTS ASSOCIATED ON BACKEND');
				}else{
					res.json(topic);
				}
			})

		},

	}
}

