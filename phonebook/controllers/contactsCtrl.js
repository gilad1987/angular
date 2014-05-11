

app.controller('contactsCtrl',function($scope,$location,$routeParams,$cookieStore, usersServies){
	
	$scope.users = usersServies.users;
	$scope.canExport = $scope.users.length>0;
	
	if($routeParams.id){
		$scope.user = $scope.users[$routeParams.id];

	}
	
	$scope.create = function(){
		$scope.user.id = usersServies.users.length+1;
		usersServies.users.push($scope.user);
		$cookieStore.put('users',usersServies);
		$scope.user = {};
		$scope.phone_book_form.$setPristine();
		$scope.canExport = $scope.users.length>0;
		$location.path('/list');
	};
  	
  	$scope.update = function(index){
		$scope.users[index] = $scope.user;
		$cookieStore.put('users',usersServies);
		$location.path('/list');
  	};

  	$scope.delete = function(index){
		$scope.users.splice(index, 1);
		$cookieStore.put('users',usersServies);
		$scope.canExport = $scope.users.length>0;
  	};

  	$scope.exportToCSV = function(){
  		var dom,
  			csv;

		csv = "name,phone\n";
		
		for(i=0; i<usersServies.users.length; i++){
				var name = usersServies.users[i].name;
				var phone = usersServies.users[i].phone;
				csv = csv + name+','+phone+'\n';
		}
    	
    	dom = document.createElement('a');
    	dom.setAttribute('href', 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv) );
    	dom.setAttribute('download', 'contacts.csv');
    	dom.click();
  	};

  	$scope.isInvalid = function(field){
   		 return $scope.phone_book_form[field].$invalid && $scope.phone_book_form[field].$dirty;
  	};

 	$scope.isValid = function(field){
    	return $scope.phone_book_form[field].$valid && $scope.phone_book_form[field].$dirty;
  	};

});