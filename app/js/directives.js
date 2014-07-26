'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('myApp.directives', []).
  directive('click', ["$location", function($location) {
    return function(scope, element, attrs) {
      element.click(function() {
      		$location.path('portfolio/#');  // # to go to top
        });
    };
  }]);

// angular.module('myApp.directives', []).
//   directive('resize', function($window) {
//     return function (scope, element) {
// 		var w = angular.element($window);
// 		scope.getWindowDimensions = function () {
// 			return { 'h': w.height(), 'w': w.width() };
// 		};
// 		scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
// 			scope.windowHeight = newValue.h;
//             scope.windowWidth = newValue.w;
            
//             scope.style = function () {
// 				return { 
//                     'height': (newValue.h) + 'px',
//                     'width': (newValue.w) + 'px' 
//                 };
// 			};
            
// 		}, true);
	
// 		w.bind('resize', function () {
// 			scope.$apply();
// 		});
// 	}
//   });  
