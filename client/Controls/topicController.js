myApp.controller('topicController', function ( userFactory, topicFactory, postFactory, commentFactory, $location, $routeParams){

	var _this = this;

	_this.user = userFactory.user();
	this.index = function(){
	topicFactory.show($routeParams.id, function(
		data){
		// console.log(data);
		_this.topic = data;
	});
		
	}
	this.index();
	this.index2 = function(){
	topicFactory.show($routeParams.id, function(
		data){
		// console.log(data);
		_this.post = data;
	});
		
	}
	this.index2();




	_this.addPost = function(newPost){
		// console.log(newPost);

		newPost._user=_this.user
		newPost._topic=this.topic
		// console.log(newPost)

		postFactory.create(newPost, function(postData){
			_this.postData = postData;
			// console.log(postData,"cotrl", _this.index);
			_this.newPost={};
			_this.index();
		});
	}
	_this.newComment = function(newComment, Id){
		console.log(newComment);
		newComment = {
			comment: newComment
		}
		newComment._user=_this.user
		newComment._post=Id
		console.log(newComment)
		commentFactory.create(newComment, function(commentData){
			_this.commentData=commentData;
			_this.newComment={};
			_this.index2();
		});
	}
	_this.like=function(post_id, like){
		// console.log(post_id)
		postFactory.update(post_id, like, function(){
			postFactory.show($routeParams.id, function(data){
				_this.index();
				// console.log(data);
				// _this.post=data;
				
			});
		});
	}
	_this.dislike=function(post_id, dislike){
		// console.log(post_id)
		postFactory.dislike(post_id, dislike, function(){
			postFactory.show($routeParams.id, function(data){
				_this.index();
				// console.log(data);
				// _this.post=data;
				
			});
		});
	}
	_this.logout = function(){
			userFactory.logout();
			$location.url('/logout');
		}

	
});

