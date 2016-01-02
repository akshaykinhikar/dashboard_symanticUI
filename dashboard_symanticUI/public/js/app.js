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
	})
	.state('register', {
		url: '/register',
		templateUrl: './views/registationForm.html'
		// controller: 'dashboardCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: './views/login.html'
		// controller: 'dashboardCtrl'
	});

	$urlRouterProvider.otherwise('/deviceList');

});
