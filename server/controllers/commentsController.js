var mongoose = require('mongoose');

var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');
var Topic = mongoose.model("Topic")

module.exports =function(){
	return{
		index: function(req, res){
			Comment.find({}).populate('_post').exec(function(err, allComments){
				if(err){
					console.log(err);
				}else{
					res.json(allComments);
				}
			})
		},

		create: function(req, res){
			console.log(req.body);
			var comment = new Comment({_user: req.body._user._id, _post: req.body._post, content: req.body.comment})
			Post.findOne({_id: req.body._post}, function(err, post){
				if(err){
					console.log(err)
				}else{
					console.log("SHOULD BE COMMET" + comment)
					post.comments.push(comment)
					console.log("&&&&&&&&&&&&", post, "######", comment)
					post.save(function(err){
						if (err){
							console.log(err)
						}else{
							comment.save(function(err, newComment){
								if(err){
									console.log(err+"  comment won't get inserted into database")
								}else{
									User.findByIdAndUpdate({_id: comment._user}, {$push: {comments: comment._id}}, function(err, doc) {});
									console.log('comment for post inserted INTO THE BASE OF DATA');
									res.json(newComment)
								}
							})
						}
					})
				}
			})
		}
		
	}
}