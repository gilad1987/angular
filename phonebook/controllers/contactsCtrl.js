

app.controller('contactsCtrl',function($scope,$location,$routeParams, usersServies){
	$scope.users = usersServies.users;
	
	if($routeParams.id){
		$scope.user = $scope.users[$routeParams.id];
	}
	
	$scope.create = function(){
		$scope.user.id = usersServies.users.length+1;
		usersServies.users.push($scope.user);
		$scope.user = {};
		$scope.phone_book_form.$setPristine();
		$location.path('/');
	};
	
  	$scope.delete = function(index){
		$scope.users.splice(index, 1);
  	};

  	$scope.update = function(index){
		$scope.users[index] = $scope.user;
		$location.path('/');
  	};


  	$scope.isInvalid = function(field){
   		 return $scope.phone_book_form[field].$invalid && $scope.phone_book_form[field].$dirty;
  	};

 	$scope.isValid = function(field){
    	return $scope.phone_book_form[field].$valid && $scope.phone_book_form[field].$dirty;
  	};

});