'use strict';

/* Controllers */

angular.module('photoLibrary')

.controller('HomeController', ['$scope', 'fileReader',
	function($scope, fileReader) {

		var storage = localStorage["images"];
		$scope.images = storage ? JSON.parse(storage) : [];

		$scope.deleteImage = function(image){
			var index = $scope.images.indexOf(image);
			$scope.images.splice(index,1);
			localStorage["images"] = JSON.stringify($scope.images);
		}

		$scope.onFileSelect = function($files) {
			fileReader.readAsDataUrl($files[0], $scope)
			.then(function(result) {
				$scope.images.push(result);
				localStorage["images"] = JSON.stringify($scope.images);
			});
		};

	}]);




