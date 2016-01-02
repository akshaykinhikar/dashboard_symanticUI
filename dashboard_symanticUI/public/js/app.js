angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('dashboard', {
		url: '/dashboard',
		templateUrl: './views/dashboard.html',
		controller: 'mainControllerCtrl'
	});

	$urlRouterProvider.otherwise('/dashboard');

});
