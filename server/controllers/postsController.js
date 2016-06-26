var mongoose = require('mongoose');

var Post = mongoose.model('Post');
var Topic = mongoose.model("Topic");
var Comment = mongoose.model('Comment');

module.exports =function(){
	return{
		index: function(req, res){
			Post.find({}).populate('_topic').exec( function(err, allPosts){
				if(err){
					console.log(err);
				}else{
					// console.log(allPosts);
					res.json(allPosts);
				}
			})
		},
		create: function(req, res){
			console.log(req.body);
			//look into associating _user with post
			var post = new Post({_user: req.body._user._id, post: req.body.post, _topic: req.body._topic})
			Topic.findOne({_id: req.body._topic._id}, function(err, topic){
				if(err){
					console.log(err)
				}else{
					topic.posts.push(post)
					topic.save(function(err){
						if (err){
							console.log(err)
						} else {
							post.save(req.body, function(err, newPost){
								if(err){
									console.log(err+"  ====PErmission Denied+++")
								}else{
									User.findByIdAndUpdate({_id: post._user}, {$push: {posts: post._id}}, function(err, doc) {})
									console.log('Post for TOPIC was INSERTED INTO DATABSE');
									res.json(newPost)
								}
							})
						}
					})
				}
			})
			// console.log(post);

		},
		show: function(req, res){
			Post.findOne({_id: req.params.id}).populate('likes')
			// .populate(
			// 		{path: 'likes',
			// 		populate: {path: '_user'}
			// 	}

				.exec(function(err, like_number){
				if(err){
					console.log(err+'O LIKES ASSOCIATED ON BACKEND');
				}else{
					res.json(like_number);
				}
			})

		},
		update: function(req, res){
			console.log(req.params.id+'HEY HERE IS like COUNT CONTROLLER INTEL', req.body);
			Post.findOne({_id: req.params.id}, function(err, post){
				if(err){
					console.log(err+" Y U NO UPDATE VOTE COUNT?")
					res.json(err);
				}else{
					post.likes ++;
					post.save(function(err, post){
						if(err){
							res.json(err);
						}else{
							console.log("Someone Liked._____________________________________", post)
							res.json(post);
						}
					});
				}
			});
		},
		dislike: function(req, res){
			console.log(req.params.id+'HEY HERE IS like COUNT CONTROLLER INTEL', req.body);
			Post.findOne({_id: req.params.id}, function(err, post){
				if(err){
					console.log(err+" Y U NO UPDATE VOTE COUNT?")
					res.json(err);
				}else{
					post.dislikes ++;
					post.save(function(err, post){
						if(err){
							res.json(err);
						}else{
							console.log("Someone Liked._____________________________________", post)
							res.json(post);
						}
					});
				}
			});
		},

		

	}
}

