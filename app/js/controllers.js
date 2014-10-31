'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('HomeController', ['$scope',
	function($scope) {

		$scope.$watch('images', function() {
			console.log($scope.images);
		});

		var storage = localStorage["images"];
		$scope.images = storage ? JSON.parse(storage) : [];

		$scope.deleteImage = function(image){
			var index = $scope.images.indexOf(image);
			$scope.images.splice(index,1);
			localStorage["images"] = JSON.stringify($scope.images);
		}

		$scope.onFileSelect = function($files) {
			var reader = new FileReader();
			reader.readAsDataURL($files[0]);
			reader.onload = function (e) {
				$scope.images.push(e.target.result);
				console.log($scope.images);
				localStorage["images"] = JSON.stringify($scope.images);
			}
		};

	}]);




