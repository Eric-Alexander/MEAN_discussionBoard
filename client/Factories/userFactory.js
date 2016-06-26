myApp.factory('userFactory', function($http, $sessionStorage){
	var factory = {};

	$sessionStorage.currUser;

	factory.check = function(info, callback){
		console.log(info);
		$http.post('/login', info).then(function(data){
			$sessionStorage.currUser=data.data;
			callback(data);
		})
	}
	factory.create = function(user, callback){
		$http.post('/users').success(function(data){
			callback(data);
			$sessionStorage.currUser=data.data
		})
	}
	factory.getUser = function(info, callback) {
		$http.post('/users', info).then(function(data) {
			callback(data);
		})
	}
	factory.user = function(){
		return $sessionStorage.currUser;
	}
	factory.logout = function(){
		$sessionStorage.currUser = null;
	}
	return factory
})