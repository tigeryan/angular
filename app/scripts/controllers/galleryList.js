'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GalleryListCtrl
 * @description
 * # GalleryListCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('GalleryListCtrl', function ($scope,$http) {
        /*
        $scope.galleryList = [
            {'name':'USVTA','gallery_id':'1','cover_image':'images/1.jpg'},{'name':'Monster Truck','gallery_id':'2','cover_image':'images/2.jpg'},{'name':'Oval','gallery_id':'3','cover_image':'images/3.jpg'}
        ];
        */

        $scope.imageList = {};
        //console.log('here');
        var responsePromise = $http.get('http://localhost:8600/test.cfc?method=getimages');

        responsePromise.success(function(data, status, headers, config) {
           // console.log('success: ' + data);
            $scope.imageList = data;
           // console.log(data[0].gallery_id);
        });
        responsePromise.error(function(data, status, headers, config) {
           console.log('AJAX failed!');
        });

  });



