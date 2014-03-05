

var app = angular.module('phoneBook',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.
		when('/', {
			controller: 'contactsCtrl',
			templateUrl: 'templates/list.html'
		})
		.when('/create',{
			controller: 'contactsCtrl',
			templateUrl: 'templates/add.html'	
		})
		.when('/update/:id',{
			controller: 'contactsCtrl',
			templateUrl: 'templates/edit.html'	
		})		
		;
}]);