angular
	.module('meanTodo.list')
	.config('listConfig');

function listConfig($stateProvider) {
	
	$stateProvider state ({
		name: 'list',
		url: '/list',
		templateUrl: 'public/states/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}