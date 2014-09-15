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
        /*
        $scope.galleryList = [
            {'name':'USVTA','gallery_id':'1','cover_image':'images/1.jpg'},{'name':'Monster Truck','gallery_id':'2','cover_image':'images/2.jpg'},{'name':'Oval','gallery_id':'3','cover_image':'images/3.jpg'}
        ];
        */

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
