angular
	.module('meanTodo.list')
	.config('listConfig');

function listConfig($stateProvider) {
	
	$stateProvider state ({
		name: 'list',
		url: '/',
		templateUrl: '/states/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}