'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.animations',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/project/:workId', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/about', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl3'});
  $routeProvider.when('/contact', {templateUrl: 'partials/partial4.html', controller: 'MyCtrl4'});
  $routeProvider.otherwise({redirectTo: '/portfolio'});
}]);
