

app.controller('listCtrl',function($scope, usersServies){
	$scope.users = usersServies.users;
});