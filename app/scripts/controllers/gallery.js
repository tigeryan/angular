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

        $scope.gallery_list = [
            {'name':'USVTA','gallery_id':'1','cover_image':'images/1.jpg'},{'name':'Monster Truck','gallery_id':'2','cover_image':'images/2.jpg'},{'name':'Oval','gallery_id':'3','cover_image':'images/3.jpg'}
        ];


        $scope.myData = {};
        $scope.myData.doClick = function(item, event) {

            var responsePromise = $http.get("http://localhost:8600/test.cfc?method=getlist");

            responsePromise.success(function(data, status, headers, config) {
                $scope.myData.fromServer = data.DATA;
            });
            responsePromise.error(function(data, status, headers, config) {
                alert("AJAX failed!");
            });
        }



  });
