angular
	.module('meanTodo.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl() {
	var vm = this;
		vm.submit = submitFn;

	function submitFn() {
		console.log(vm);

	}
}



