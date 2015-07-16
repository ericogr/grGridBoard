angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
	    return {
			restrict: 'E',
			transclude: true,
			scope: {
				lines: '@',
				columns: '@'
			},
			controller: function($scope, $element) {
				$scope.positions = generatePositions(8, 8);

				function generatePositions(lines, columns) {
					var ret = [];

					for (var l = 0; l < lines; l++) {
						for (var c = 0; c < columns; c++) {
							ret.push({"x": l, "y": c});
						}
					}

					return ret;
				}
			},
			templateUrl: 'svg-grid-board.html',
			replace: true
	    };
	});