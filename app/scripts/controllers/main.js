'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {

    /*
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    */

    $scope.galleryList = {};

    var responsePromise = $http.get('http://beta.bodiesbybean.com/cfcs/bbb.cfc?method=getGalleryCovers');

    responsePromise.success(function(data, status, headers, config) {
        $scope.galleryList = data;
    });

    responsePromise.error(function(data, status, headers, config) {
       console.log('AJAX failed!');
    });


});
