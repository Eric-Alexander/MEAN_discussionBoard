// var myApp = angular.module('myApp', ['ngRoute'], ['ngStorage']);	

myApp.factory('postFactory', function ($http, $sessionStorage, topicFactory){
	console.log('kjlhljkh')
	var factory = {};

	factory.index = function(callback){
		console.log("getting posts");
		$http.get('/posts').then(function(data){
			callback(data);
		});
	}

	factory.create = function(post, callback){
		console.log(post);
		$http.post('/posts', post).success(function(post){
			console.log(post);
			callback(post);
		});
	}
	factory.update=function(post_id, post_like, callback){
		console.log("ATTEMPING TO UPDATE VOTE COUNT", post_id, post_like)
		$http.put('/posts/'+post_id, post_like).then(function(data){
			callback();
		})

	}
	factory.dislike=function(post_id, post_dislike, callback){
		console.log("ATTEMPING TO UPDATE VOTE COUNT", post_id, post_dislike)
		$http.put('/postsd/'+post_id, post_dislike).then(function(data){
			callback();
		})

	}
	factory.show = function(x, callback){
		console.log("getting singular post");
		$http.get('/posts/'+x).then(function(post){
			console.log(post);
			callback(post);
		})
	}
		

		return factory

	});