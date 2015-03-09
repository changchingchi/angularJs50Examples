angular.module('nameApp',[])


.controller('MainCtrl', function($scope){
	$scope.firstname='john';
	$scope.lastname='deo';
	$scope.namearray=['andy', 'divya','john'];

	$scope.addName = function(){

		$scope.namearray.push($scope.enterName);
		//push the "enterName" in to namearray
		$scope.enterName = '';
	}
	$scope.removeName = function(name){
		$scope.namearray.splice($scope.namearray.indexOf(name),1);
	}

})

.controller('CountryCtrl', function($scope, $http){
		$http.get('http://www.w3schools.com/website/Customers_JSON.php')
			.success(function(response){$scope.names = response;})
})