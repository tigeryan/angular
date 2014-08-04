'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('GalleryCtrl', function ($scope,$http) {

        $scope.galleryList = [
            {'name':'USVTA','gallery_id':'1','cover_image':'images/1.jpg'},{'name':'Monster Truck','gallery_id':'2','cover_image':'images/2.jpg'},{'name':'Oval','gallery_id':'3','cover_image':'images/3.jpg'}
        ];

        $scope.myData = {};
        console.log('here');
        var responsePromise = $http.get('http://localhost:8600/test.cfc?method=getlist2');

        responsePromise.success(function(data, status, headers, config) {
            console.log('success: ' + data);
            $scope.myData = data.DATA;
            console.log(data.gallery_id[0]);
        });
        responsePromise.error(function(data, status, headers, config) {
           console.log('AJAX failed!');
        });



  });
