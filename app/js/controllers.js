'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http',
	function($scope, $http) {
      $scope.portfolio = [];
    	$http.get('data/portfolio.json').success(function(data) {
    	   $scope.portfolio = data;
  	  }); 
  }])
  .controller('MyCtrl2', ['$scope', '$routeParams', '$http', '$location', '$anchorScroll',
  	function($scope, $routeParams, $http, $location, $anchorScroll) {
      $scope.work = [];
      //$location.hash($routeParams.scrollTo);
      $anchorScroll();
  		$http.get('data/' + $routeParams.workId + '.json').success(function(data) {
      	$scope.work = data;
    });	
 }]);

