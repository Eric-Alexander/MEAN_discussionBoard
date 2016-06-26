// var myApp = angular.module('myApp', ['ngRoute'], ['ngStorage']);	

	myApp.factory('commentFactory', function ($http, $sessionStorage, topicFactory, postFactory){

		var factory = {};

		factory.index = function(callback){
			console.log("getting comments");
			$http.get('/comments').then(function(data){
				callback(data);
			});
		}

		factory.create = function(newComment, callback){
			console.log(newComment)
			$http.post('/comments', newComment).then(function(commentData){
				console.log(commentData);
				callback(commentData);
			});
		}
		return factory
			
	});