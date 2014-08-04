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
        {'name':'USVTA','gallery_id':'1'},{'name':'Monster Truck','gallery_id':'2'},{'name':'Oval','gallery_id':'3'}
    ];


  });
