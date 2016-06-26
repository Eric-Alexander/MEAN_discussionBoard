console.log('db ctrl file')

myApp.controller('dashboardController', function ( userFactory, topicFactory, $location, $routeParams){

		this.test = 'TEST';
		
		var _this=this;
		_this.user = userFactory.user();
		this.index = function(){
			topicFactory.index(function(data){
				// console.log('*******')
				// console.log(data.data)
				// console.log('*******')
				_this.topics = data.data;
				console.log(data);
			});
			
		}
		this.index();
		_this.addTopic=function(newTopic){
			newTopic.user=_this.user
			console.log(newTopic);
			console.log(newTopic.user);
			topicFactory.create(newTopic, function(topicData){
			//made factory.index a reusable function to automatically refresh the DOM 
				_this.index();
				console.log(topicData);
				_this.newTopic = {};

			});
		}
		_this.getTopic=function(getTopic){
			console.log(getTopic);
			topicFactory.show(getTopic, function(
				singleTopic){
				_this.singleTopic = singleTopic.singleTopic;
				_this.singleTopic = {};
			});
		}
		

		_this.logout = function(){
			userFactory.logout();
			$location.url('/logout');
		}
	
	});



	// 	this.index = function(){
	// 		postFactory.index(function(posts){
	// 			_this.posts=posts;
	// 		});
	// 	} 
	// 	this.index();
	// 	this.newComment= function(newComment, Id, boolean){
	// 		var comment = {content: newComment.content}
	// 		if (boolean == true){
	// 			comment._commentParent=Id
	// 		}else{
	// 			comment.post=Id
	// 		}
	// 		commentFactory.create(comment, function(){
	// 			_this.index();
	// 		})
	// 		console.log(comment);
		// }
