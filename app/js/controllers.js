'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('HomeController', ['$scope',
 function($scope) {

  $scope.images = [];

  $scope.onFileSelect = function($files) {
    var reader = new FileReader();
    reader.readAsDataURL($files[0]);
    reader.onload = function (e) {
      console.log(e.target.result);
      $scope.images.push(e.target.result);
    }
  };

}]);




