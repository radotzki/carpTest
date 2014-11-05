'use strict';

angular.module('test', [])
angular.module('myApp', ['test'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $location) {
	$location.html5Mode(true).hashPrefix('!');

	$routeProvider
	.when('/test', {
		templateUrl: 'partials/test.html',
		controller: 'TestController'
	})
	.when('/finish', {
		templateUrl: 'partials/finish.html',
		controller: 'FinishController'
	})
	.otherwise({redirectTo: '/test'});
}])