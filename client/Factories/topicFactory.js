angular.module('myApp');
myApp.factory('topicFactory', function($http){
	var factory = {};

	factory.index = function(callback)	{
		console.log('getting topics...')
		$http.get('/topics').then(function(data) {
			// console.log(data)
			// console.log('/////')
			// console.log(data);
			// console.log('/////')
			callback(data);
		});
	}
	factory.create = function(topic, callback){
		console.log(topic);
		$http.post('/topics', topic).then(function(topic){
			callback(topic);
		});
	}
	factory.show = function(topic_id, callback){
		console.log("getting singular topic: "+topic_id);
		$http.get('/topics/'+topic_id).then(function(data){
			console.log(data);
			callback(data.data);
		})
	}
	return factory
});