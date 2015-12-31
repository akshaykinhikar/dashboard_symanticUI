angular.module('app.controllers', [])
.controller('mainControllerCtrl', function($scope){


	$('.ui.dropdown').dropdown();

	$scope.toggleSidebar = function(){
		$('.ui.labeled.icon.sidebar')
			.sidebar('toggle')
		;
	};
});
