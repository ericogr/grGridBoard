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

		$scope.clicado = function(line, column, values, countSelected, selected) {
			$scope.clickEvent = line + '/' + column + '/' + countSelected + '/' + selected;
		}
	});