

app.controller('listCtrl',function($scope,$routeParams,$location, usersServies){
	$scope.users = usersServies.users;

	$scope.user = $scope.users[$routeParams.id];

  	$scope.remove = function(index){
		$scope.users.splice(index, 1);
  	};

  	$scope.edit = function(index){
		$scope.users[index] = $scope.user;
		$location.path('/');
  	};


});