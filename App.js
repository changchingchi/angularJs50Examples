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