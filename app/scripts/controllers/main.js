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
            {image: 'http://www.bodiesbybean.com/images/gallery/953.jpg', description: 'Image 00'},
            {image: 'http://www.bodiesbybean.com/images/gallery/136.jpg', description: 'Image 01'},
            {image: 'http://www.bodiesbybean.com/images/gallery/953.jpg', description: 'Image 02'},
            {image: 'http://www.bodiesbybean.com/images/gallery/136.jpg', description: 'Image 03'},
            {image: 'http://www.bodiesbybean.com/images/gallery/953.jpg', description: 'Image 04'}
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            //console.log('isCurrentSlideIndex: ' + $scope.currentIndex == index + ' : ' + index + ' : ' + $scope.currentIndex);
            console.log('index: ' + index);
            console.log('currentIndex: ' + $scope.currentIndex);
            console.log('test: ' + $scope.currentIndex === index);
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            console.log('prev: ' + $scope.currentIndex +  ' : ' + $scope.slides.length);
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            console.log('next: ' + $scope.currentIndex);
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };


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
