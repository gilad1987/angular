

var app = angular.module('phoneBook',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.
		when('/', {
			controller: 'listCtrl',
			templateUrl: 'templates/list.html'
		})
		.when('/add',{
			controller: 'addCtrl',
			templateUrl: 'templates/add.html'	
		})
		.when('/edit/:id',{
			controller: 'listCtrl',
			templateUrl: 'templates/edit.html'	
		})		
		;
}]);