

app.controller('addCtrl',function($scope, usersServies){
	$scope.addRow = function(){
		$scope.user.id = usersServies.users.length+1;
		usersServies.users.push($scope.user);
		$scope.user = {};
		$scope.phone_book_form.$setPristine();
	};

  	$scope.isInvalid = function(field){
   		 return $scope.phone_book_form[field].$invalid && $scope.phone_book_form[field].$dirty;
  	};

 	$scope.isValid = function(field){
    	return $scope.phone_book_form[field].$valid && $scope.phone_book_form[field].$dirty;
  	};
});