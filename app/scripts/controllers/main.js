'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')

	.controller('MainCtrl', function ($scope, $http) {

        // use this until working, then switch to galleryList
        $scope.slides = [
            {image: 'images/img00.jpg', description: 'Image 00'},
            {image: 'images/img01.jpg', description: 'Image 01'},
            {image: 'images/img02.jpg', description: 'Image 02'},
            {image: 'images/img03.jpg', description: 'Image 03'},
            {image: 'images/img04.jpg', description: 'Image 04'}
        ];

        $scope.galleryList = {};

        var responsePromise = $http.get('http://beta.bodiesbybean.com/cfcs/bbb.cfc?method=getgallery');

        responsePromise.success(function (data, status, headers, config) {
            //console.log(data);
            $scope.galleryList = data;
           // console.log(data[0].gallery_id);
        });
        responsePromise.error(function (data, status, headers, config) {
            console.log('AJAX failed!');
        });

	});
