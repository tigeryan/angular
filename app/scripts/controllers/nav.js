'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('NavCtrl', function ($scope,$location) {

	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


	$scope.isActive = function (viewLocation) {
		 var active = (viewLocation === $location.path());
		 return active;
	};

  });
