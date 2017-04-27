angular
	.module('meanTodo.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl($http) {
	var vm = this;
	vm.submit = submitFn;
	taskList();

	function taskList() {
		$http({
			url: "/api/todos",
			method: "GET",
		}).then(function(response) {
			vm.tasks = response.data;
		}); 
	}

	function submitFn() {
		$http({
			url: "/api/todos",
			method: "POST",
			data: {task: vm.task, dueDate: vm.dueDate}
		});
	}
}



