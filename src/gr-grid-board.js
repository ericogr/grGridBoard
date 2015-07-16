angular.module('grGridBoard', [])
	.directive('grGridBoard', function() {
	    return {
			restrict: 'E',
			transclude: true,
			scope: {
				lines: '=',
				columns: '=',
				width: '=',
				height: '='
			},
			controller: function($scope, $element) {
				$scope.viewBox = "0 0 " + $scope.width + " " + $scope.height;
				$scope.rectWidth = $scope.width / $scope.columns;
				$scope.rectHeight = $scope.height / $scope.lines;
				$scope.positions = generatePositions($scope.lines, $scope.columns, $scope.rectWidth, $scope.rectHeight);

				function generatePositions(lines, columns, width, height) {
					var ret = [];

					for (var l = 0; l < lines; l++) {
						for (var c = 0; c < columns; c++) {
							ret.push({"x": c * width, "y": l * height});
						}
					}

					return ret;
				}
			},
			templateUrl: 'svg-grid-board.html',
			replace: true
	    };
	});