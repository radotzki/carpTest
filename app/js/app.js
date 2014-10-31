'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.services', 'myApp.controllers', 'myApp.filters', 'angularFileUpload'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $location) {
	$location.html5Mode(true).hashPrefix('!');

	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	})
	.otherwise({redirectTo: '/home'});
}])