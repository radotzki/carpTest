'use strict';

/* Controllers */

angular.module('photoLibrary')

.controller('HomeController', ['$scope', 'fileReader', 'compressor',
	function($scope, fileReader, compressor) {

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
				$scope.images.push(compressor.compress(result));
				localStorage["images"] = JSON.stringify($scope.images);
				
			});
		};

	}]);




