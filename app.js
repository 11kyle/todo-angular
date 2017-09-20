(function() {
	var todoApp = angular.module('todoApp', []);

	todoApp.controller('TodoController', TodoController);

	function TodoController($scope) {
		$scope.todos = [
			{
				text: 'Clean room',
				checkboxModel: {
					value: false
				}
			},
			{
				text: 'Do dishes',
				checkboxModel: {
					value: false
				}
			}
		];
		
		// Might need a function to move completed items to the bottom
		$scope.toggleCompleted = function() {
			
		};
		
		// Add Todo
		$scope.addTodo = function(todo) {
			$scope.todos.push(todo);
			$scope.todo = {};
			console.log(todo);
		}
	}
})();