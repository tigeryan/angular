'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
