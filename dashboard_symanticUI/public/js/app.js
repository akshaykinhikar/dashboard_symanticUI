angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('deviceList', {
		url: '/deviceList',
		templateUrl: './views/deviceList.html',
		controller: 'deviceListCtrl'
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: './views/dashboard.html',
		controller: 'dashboardCtrl'
	});

	$urlRouterProvider.otherwise('/deviceList');

});
