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
	});