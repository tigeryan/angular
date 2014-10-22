'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	.controller('MainCtrl', function ($scope,$http) {

        $scope.galleryList = {};

        var responsePromise = $http.get('http://beta.bodiesbybean.com/cfcs/bbb.cfc?method=getgallery');

        responsePromise.success(function(data, status, headers, config) {
            //console.log(data);
            $scope.galleryList = data;
           // console.log(data[0].gallery_id);
        });
        responsePromise.error(function(data, status, headers, config) {
           console.log('AJAX failed!');
        });

	});
