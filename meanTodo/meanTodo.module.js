angular
	.module('meanTodo', [
	'ui.router',
	'meanTodo.list'
	])


	.config(meanTodoConfig);

function meanTodoConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}