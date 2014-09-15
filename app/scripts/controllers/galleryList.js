'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GalleryListCtrl
 * @description
 * # GalleryListCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('GalleryListCtrl', function ($scope,$routeParams, $http, $filter) {
        /*
        $scope.galleryList = [
            {'name':'USVTA','gallery_id':'1','cover_image':'images/1.jpg'},{'name':'Monster Truck','gallery_id':'2','cover_image':'images/2.jpg'},{'name':'Oval','gallery_id':'3','cover_image':'images/3.jpg'}
        ];
        */

		$scope.myData = {
			fullImage: '',
			modalShown: false,
			partyTitle: 'Gallery'
		};

        $scope.imageList = {};
		$scope.id = $routeParams.id;
        var responsePromise = $http.get('http://beta.bodiesbybean.com/cfcs/bbb.cfc?method=getimages&partyid=' + $scope.id);

        responsePromise.success(function(data, status, headers, config) {
            $scope.imageList = data;
			$scope.myData.partyTitle = $scope.imageList[0].party_title;
        });
        responsePromise.error(function(data, status, headers, config) {
           console.log('AJAX failed!');
        });

		$scope.logClose = function() {
			//console.log('close!');
		};

		$scope.prevModal = function() {
			var found = $filter('getByProperty')('full_image', $scope.myData.fullImage, $scope.imageList);
			if (found.currentrow != 1) {
				$scope.myData.fullImage = $scope.imageList[found.currentrow-2].full_image;
			}
		};

		$scope.nextModal = function() {
			var found = $filter('getByProperty')('full_image', $scope.myData.fullImage, $scope.imageList);
			if (found.currentrow != $scope.imageList.length) {
				$scope.myData.fullImage = $scope.imageList[found.currentrow].full_image;
			}
		};

		$scope.toggleModal = function(fullImage,myIndex) {
			$scope.myData.myIndex = myIndex;
			$scope.myData.fullImage = fullImage;
			$scope.myData.modalShown = !$scope.myData.modalShown;
		};
});


