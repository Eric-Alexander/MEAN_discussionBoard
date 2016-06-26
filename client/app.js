
var myApp = angular.module('myApp',['ngRoute', 'ngStorage']).config(function ($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: '/partials/login.html',
		controller: 'loginController',
		controllerAs: 'lc'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController',
		controllerAs: 'dc'
	})
	.when('/user/:id',{
		templateUrl: 'partials/user.html',
		controller: 'userController',
		controllerAs: 'uc'
	})
	.when('/topic/:id',{
		templateUrl: 'partials/topic.html',
		controller: 'topicController',
		controllerAs: 'tc'
	})
	.when('/logout', {
		templateUrl: '/partials/login.html',
		controller: 'loginController',
		controllerAs: 'lc'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});

//routes