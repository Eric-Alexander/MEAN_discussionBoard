myApp.controller('userController', function ( userFactory, $location, $routeParams){

	var _this = this;

	var user = userFactory.user();
	userFactory.getUser($routeParams, function(data) {
		_this.user = data.data;
		console.log(data);
	});

	_this.logout = function(){
		userFactory.logout();
		$location.url('/logout');
	}

})