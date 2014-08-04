'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('GalleryCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  });
