angular.module('testGridBoard', ["grGridBoard"])
	.controller('TestGridBoardController', function($scope) {
		$scope.boardValue = [
			[true, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, false],
			[false, false, false, false, false, false, false, true]
		];

		$scope.clickEvent = '';

		$scope.clicado = function(line, column, value, countSelected, values) {
			$scope.clickEvent = line + '/' + column + '/' + value + '/' + countSelected;
		}
	});