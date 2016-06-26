myApp.controller('loginController', function(userFactory, $sessionStorage, $location){

	this.test = 'this IS A test';
	var _this = this;

	console.log(this.test);

	_this.login = function(user){
		console.log(user);
		userFactory.check(_this.user, function(user){
			if(user){
				$location.url('/dashboard')
			}else{
				userFactory.create(_this.user, function(user){
					$location.url('/dashboard');
				})
			}
		})

	}


});