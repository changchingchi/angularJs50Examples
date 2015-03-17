angular.module('nameApp',['ngRoute'])

.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'country-list.html',
            controller: 'CountryCtrl'
          }).
          when('/:countryName', {
            templateUrl: 'country-details.html',
            controller: 'CountryDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
 })

.factory('countries',function($http){

  function getData(callback){
    $http({
      method: 'GET',
      url : 'CityJSON.php',
      cache: true
    }).success(callback);
  }
  return { 
      list: getData,
      find : function(name, callback){
        getData(function(data){
          var country = data.filter(function(entry){
            return entry.Name === name;
          })[0];
          callback(country);
        })
      }
  };
})




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


.controller('CountryCtrl', function ($scope,$http, countries){
        countries.list(function(countries) {
          $scope.JSONresponse = countries;
        });
      })

 .controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
   countries.find($routeParams.countryName, function(country){
    $scope.JSONobject= country;
   })
})